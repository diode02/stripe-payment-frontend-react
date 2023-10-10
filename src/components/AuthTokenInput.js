// AuthTokenInput.js
import { useEffect, useState } from "react";
import { InputContainer, StyledInput, StyledButton } from "./StyledComponents";

const AuthTokenInput = () => {
  const [token, setToken] = useState("");

  const handleTokenSubmit = () => {
    localStorage.setItem("authToken", token);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <InputContainer>
      <StyledInput
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Enter Auth Token"
      />
      <StyledButton onClick={handleTokenSubmit}>Store Token</StyledButton>
    </InputContainer>
  );
};

export default AuthTokenInput;
