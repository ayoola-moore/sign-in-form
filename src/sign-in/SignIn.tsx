import React from "react";
import styled from "styled-components";
import SignInExtras from "../sign-in-extras/SignInExtras";
import SignInForm from "../sign-in-form/SignInForm";

const SignInFormWrapper = styled.div`
  text-align: left;
  display: block;
  padding: 0 2% 4%;
  width: 50%;
  min-width: 300px;
  max-width: 400px;
  margin: 0 auto;
  border-top: 2px solid #06874e;
  border-radius: 1px;
  background-color: #fff;
`;

const SignInHeader = styled.h1`
  text-align: center;
  display: inline-block;
  text-transform: initial;
  width: 100%;
  font-size: 1.5em;
`;

export default function SignIn() {
  return (
    <SignInFormWrapper>
      <SignInHeader>Sign in</SignInHeader>
      <SignInForm />
      <SignInExtras />
    </SignInFormWrapper>
  );
}
