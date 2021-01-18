import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Input, Label, RememberMe, SignIn } from "./Styled";

interface IValues {
  email: string;
  password: string;
  remember: string;
}

const SignInForm = () => {
  const formik = useFormik({
    initialValues: {} as IValues,
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string()
        .min(8, "Password is too short - should be 8 chars minimum.")
        .required("Password is required"),
    }),
    onSubmit: ({ email, password, remember }: IValues) => {
      axios
        .post(`localhost:8000/api/login`, {
          email,
          password,
          remember,
        })
        .then((res) => {
          console.log(`${res} successful`);
        })
        .catch((error) => {
          console.error("API request failed");
        });
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder={"Enter your email"}
        />
        <div className={"error"}>
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <br />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder={"Enter your password"}
        />
        <div className={"error"}>
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <br />
        <RememberMe>
          <Input
            id="remember"
            name="remember"
            type="checkbox"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.remember}
          />
          <label htmlFor="Remember me"> Remember me?</label>
        </RememberMe>

        <SignIn type="submit" disabled={!(formik.isValid && formik.dirty)}>
          Sign in
        </SignIn>
      </form>
    </>
  );
};

export default SignInForm;
