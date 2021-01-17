import React from "react";
import styled from "styled-components";

const Link = styled.a`
  color: #000;
  font-weight: 500;
  display: block;
  width: 100%;
`;

const SignUp = styled(Link)`
  display: inline;
`;

const ExtraWrapper = styled.div`
  display: block;
  text-align: center;
  line-height: 2em;
  padding: 5% 0px 0;
`;

const SignUpParagraph = styled.div`
  display: block;
  width: 100%;
`;

function SignInExtras() {

  return (
    <ExtraWrapper>
      <Link href={"#"}>Forget your password?</Link>
      <SignUpParagraph>
        Don't have an account? <SignUp href={"#"}>Sign up</SignUp>
      </SignUpParagraph>
      <Link href={"#"}>Resend email confirmation</Link>
    </ExtraWrapper>
  );
}

export default SignInExtras;
