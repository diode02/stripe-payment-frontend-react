// AuthTokenInput.js
import { useEffect, useState } from "react";
import { InputContainer, StyledInput } from "./StyledComponents";

const AuthTokenInput = () => {
  const [token, setToken] = useState("");
  const publicKey = localStorage.getItem("publicTestKey");

  useEffect(() => {
    if (token) localStorage.setItem("publicTestKey", token);
  }, [token]);

  useEffect(() => {
    const storedToken = localStorage.getItem("publicTestKey");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <InputContainer>
      {!publicKey && (
        <p
          style={{
            color: "red",
          }}
        >
          {"No Public Key Found"}
        </p>
      )}
      {publicKey && <p>{"Public Key is successfully saved"}</p>}
      <StyledInput
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Enter Stripe Public Test Key"
      />
    </InputContainer>
  );
};

export default AuthTokenInput;
