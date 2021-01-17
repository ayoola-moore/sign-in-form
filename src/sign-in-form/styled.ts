import styled from "styled-components";

export const SignIn = styled.button`
  display: block;
  background-color: #06874e;
  color: #fff;
  font-size: 1.5em;
  font-weight: 500;
  padding: 2% 0;
  border: none;
  width: 100%;

  &:disabled {
    background: #ccc;
  }
  & a {
    color: #fff;
  }
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  font-weight: 500;
  padding: 1% 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 4%;
  display: block;
  border: 1px solid #ccc;
`;

export const RememberMe = styled.div`
  display: flex;
  padding: 1% 0 5%;

  & input {
    width: auto;
    transform: scale(1.5);
    border: 1px solid;
    margin-right: 3%;
  }
`;
