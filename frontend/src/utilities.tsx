import { Field, getIn, ErrorMessage } from "formik";
import { InputFieldProps } from "./types";


const getStyles = (errors: string, fieldName: string) => {
  if (getIn(errors, fieldName)) {
    return {
      border: "1px solid #C30000",
      background: "#FFF2F2",
    };
  }
};

// util for input filed
export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder = "",
  errors,
}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      id={name}
      style={getStyles(errors, name)}
    />
    <span className="field-error">
      <ErrorMessage name={name} />
    </span>
  </div>
);

// local storage utility
const getSetLocalStorage = (
  key: string,
  getSet: string,
  valueToSet?: any,
  returnType?: any
) => {
  if (
    typeof window === "undefined" ||
    typeof window.localStorage === "undefined"
  ) {
    return returnType;
  }
  switch (getSet) {
    case "set":
      return localStorage.setItem(
        key,
        JSON.stringify(valueToSet || returnType)
      );
    case "get":
      return JSON.parse(localStorage.getItem(key) || "[]");
    default:
      return returnType;
  }
};

export const getSetToken = (getSet: string, data?: string[]) => {
  return getSetLocalStorage("token", getSet, data, []);
};
