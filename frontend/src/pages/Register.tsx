import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import axios, { AxiosResponse } from "axios";
import { Redirect } from "react-router-dom";
import { InputField, getSetToken } from "../utilities";
import { SignUpSchema } from "../validation";
import { Register } from "../constants";
import { UserContextType, useUser } from "../context";

const RegisterComponent = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const { setUserName } = useUser() as UserContextType;

  const [isRegistered, setIsRegistered] = useState(false);
  const { RegisterHeading, NoAccount, Name, Email, Password, Registering } =
    Register;

  const handleSubmit = async (
    values: { name: string; email: string; password: string },
    { setSubmitting, setErrors }: FormikHelpers<typeof initialValues>
  ) => {
    try {
      const response: AxiosResponse = await axios.post(
        "http://localhost:8000/auth/signup",
        {
          name: values.name,
          email: values.email,
          password: values.password,
        }
      );
      // update state when succesfull
      setUserName(response.data.user);
      // set token
      getSetToken("set", response.data.token);
      setIsRegistered(true); // Set isRegistered to true upon successful registration
    } catch (error) {
      if ((error as any).response) {
        setErrors({ password: "Registration failed. Please try again." });
      } else {
        console.error("Error occurred:", error);
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (isRegistered) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="form-signin">
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <h3>{NoAccount}</h3>
            <h1 className="h3 mb-3 fw-normal">{RegisterHeading}</h1>
            <div className="row">
              <div className="col-12 input-field">
                <InputField
                  label={Name}
                  name={Name}
                  errors={errors && touched[Name] ? errors : false}
                />
              </div>
              <div className="col-12 input-field">
                <InputField
                  label={Email}
                  name={Email}
                  errors={errors && touched[Email] ? errors : false}
                />
              </div>
            </div>
            <div className="col-12 input-field">
              <InputField
                label={Password}
                name={Password}
                type={Password}
                errors={errors && touched[Password] ? errors : false}
              />
            </div>
            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? Registering : RegisterHeading}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterComponent;
