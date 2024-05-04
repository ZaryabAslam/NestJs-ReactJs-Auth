import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { InputField, getSetToken } from "../utilities";
import { LoginInSchema } from "../validation";
import { LogInPage } from "../constants";
import { UserContextType, useUser } from "../context/index";

const LoginComponent = () => {
  // initial values for form
  const initialValues = {
    email: "",
    password: "",
  };

  // extracting constants
  const { SignIn, SignIntoContinue, SigningIn, Email, Password } = LogInPage;

  // using context
  const { setUserName } = useUser() as UserContextType;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // submit function
  const handleSubmit = async (
    values: { email: string; password: string },
    {
      setSubmitting,
      setErrors,
    }: FormikHelpers<{ email: string; password: string }>
  ) => {
    // api call to signin
    try {
      const response = await axios.post("http://localhost:8000/auth/signin", {
        email: values.email,
        password: values.password,
      });
      // updating state when apis succesfull
      setUserName(response.data.user);
      // set token
      getSetToken("set", response.data.token);
      setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
    } catch (error) {
      if ((error as any).response) {
        setErrors({ password: "Invalid email or password" });
      } else {
        console.error("Error occurred:", error);
      }
    } finally {
      setSubmitting(false);
    }
  };

  // redirect to profile page if loggedIn
  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="form-signin">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginInSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <h1 className="h3 mb-3 fw-normal">{SignIntoContinue}</h1>
            <div className="col-12 input-field">
              <InputField
                errors={errors && touched[Email] ? errors : false}
                label={Email}
                name={Email}
              />
            </div>
            <div className="col-12 input-field">
              <InputField
                errors={errors && touched[Password] ? errors : false}
                label={Password}
                name={Password}
              />
            </div>
            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? SigningIn : SignIn}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginComponent;
