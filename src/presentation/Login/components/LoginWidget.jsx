import { useState } from "react";
import { loginFields } from "../../../Core/constants/formFields";
import FormAction from "../../../Core/components/FormAction";
import FormExtra from "./FormExtra";
import Input from "../../../Core/components/Input";
import LoginUseCase from "../../../Domain/UseCases/LoginUseCase";
import Failure from "../../../Core/Failure/Failure";
import { useNavigate } from "react-router-dom";
import APP_ROUTES from "../../../Core/constants/Routs";

const fields = loginFields;
let fieldsState = {};
let fieldsErrorState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));
fields.forEach((field) => (fieldsErrorState[field.id] = null));
fieldsErrorState["non_field_errors"] = null;

export default function Login() {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState(fieldsState);
  const [errorState, setErrorState] = useState(fieldsErrorState);
  const [isEmailVeried, setIsEmailVeried] = useState(true);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginResult = LoginUseCase(loginState);
    loginResult.then((result) => {
      if (result instanceof Failure) {
        handleErrors(result);
      } else {
        clearErrors();
        if (result.role % 2 == 0) navigate(APP_ROUTES.STUDENT_HOME);
        else if (result.role % 3 == 0) navigate(APP_ROUTES.TEACHER_HOME);
        else navigate(APP_ROUTES.NO_PAGE_FOR_YOUR_ROLE);
      }
    });
  };

  const clearErrors = () => {
    let newErrorState = {};
    fields.forEach((field) => (newErrorState[field.id] = null));
    newErrorState.non_field_errors = null;
    setIsEmailVeried(true);
    setErrorState(newErrorState);
  };

  const handleErrors = (result) => {
    let newErrorState = {};
    fields.forEach((field) => (newErrorState[field.id] = null));
    newErrorState.non_field_errors =
      result.non_field_errors[0] == "EMAIL_VERIFICATION"
        ? ["you must verify your email"]
        : result.non_field_errors;
    setIsEmailVeried(!(result.non_field_errors[0] == "EMAIL_VERIFICATION"));
    newErrorState.login_field = result.login_field;
    newErrorState.password = result.password;
    setErrorState(newErrorState);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            error={errorState[field.id]}
            customClass={
              errorState[field.id] != null ? " signup_error_field" : ""
            }
          />
        ))}
        <p className="signup_error">{errorState.non_field_errors}</p>
      </div>

      <FormExtra emailVerifed={isEmailVeried} />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
