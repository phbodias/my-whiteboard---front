import styled from "styled-components";

const Button = styled.button`
  width: fit-content;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: #ffffff;

  :hover {
    text-shadow: 0 0 28px #ffffff;
  }
`;

export default Button;
