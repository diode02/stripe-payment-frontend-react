// AuthTokenInput.js
import { useState } from "react";
import { InputContainer, StyledInput, StyledButton } from "./StyledComponents";

const PaymentIntent = () => {
  const [token, setToken] = useState("");

  const handleTokenSubmit = () => {
    localStorage.setItem("paymentIntent", token);
  };

  return (
    <InputContainer>
      <StyledInput value={token} onChange={(e) => setToken(e.target.value)} placeholder="Enter Payment Intent" />
      <StyledButton onClick={handleTokenSubmit}>Store Payment Intent</StyledButton>
    </InputContainer>
  );
};

export default PaymentIntent;
