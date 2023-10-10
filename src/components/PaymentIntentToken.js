// AuthTokenInput.js
import { useEffect, useState } from "react";
import { InputContainer, StyledInput } from "./StyledComponents";

const PaymentIntent = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (token) localStorage.setItem("paymentIntent", token);
  }, [token]);

  useEffect(() => {
    const token = localStorage.getItem("paymentIntent");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <InputContainer>
      <StyledInput
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Enter Payment Intent"
      />
    </InputContainer>
  );
};

export default PaymentIntent;
