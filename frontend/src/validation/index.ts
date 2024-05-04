import * as yup from "yup";
import { ValidationSchema } from "../constants";

// validation schema for signup
export const SignUpSchema = () => {
  const {
    EmailRequired,
    InvalidEmail,
    PasswordError,
    PasswordLength,
    PasswordRequired,
    NameRequired,
  } = ValidationSchema;
  return yup.object().shape({
    name: yup.string().required(NameRequired),
    email: yup
      .string()
      .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, InvalidEmail)
      .required(EmailRequired),
    password: yup
      .string()
      .required(PasswordRequired)
      .min(8, PasswordLength)
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
        PasswordError
      ),
  });
};

// validation schema for login
export const LoginInSchema = () => {
  const {
    EmailRequired,
    InvalidEmail,
    PasswordError,
    PasswordLength,
    PasswordRequired,
  } = ValidationSchema;
  return yup.object().shape({
    email: yup
      .string()
      .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, InvalidEmail)
      .required(EmailRequired),
    password: yup
      .string()
      .required(PasswordRequired)
      .min(8, PasswordLength)
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
        PasswordError
      ),
  });
};
