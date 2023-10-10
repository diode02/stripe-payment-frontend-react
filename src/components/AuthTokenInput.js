// AuthTokenInput.js
import { useEffect, useState } from "react";
import { InputContainer, StyledInput } from "./StyledComponents";

const AuthTokenInput = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (token) localStorage.setItem("authToken", token);
  }, [token]);

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
    </InputContainer>
  );
};

export default AuthTokenInput;
