import React from "react";
import SignInExtras from "../sign-in-extras/SignInExtras";
import SignInForm from "../sign-in-form/SignInForm";
import { SignInFormWrapper, SignInHeader } from "./Styled";

export default function SignIn() {
  return (
    <SignInFormWrapper>
      <SignInHeader>Sign in</SignInHeader>
      <SignInForm />
      <SignInExtras />
    </SignInFormWrapper>
  );
}
