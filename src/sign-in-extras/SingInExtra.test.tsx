import React from "react";
import renderer from "react-test-renderer";
import 'jest-styled-components'
import SignInExtra from ".";

it("Sign-in component renders correctly", () => {
  const tree = renderer.create(<SignInExtra />).toJSON();
  expect(tree).toMatchSnapshot();
});
