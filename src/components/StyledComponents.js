// StyledComponents.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const InputContainer = styled.div`
  width: 500px;
  padding: 20px;
  background-color: #fff;
  margin: 10px 0;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
`;

export const StyledInput = styled.textarea`
  width: 480px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
