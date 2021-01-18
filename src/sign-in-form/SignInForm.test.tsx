import React from "react";
import renderer from "react-test-renderer";
import SignInForm from "./";

it("Sign-in form component renders correctly", () => {
  const tree = renderer.create(<SignInForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
