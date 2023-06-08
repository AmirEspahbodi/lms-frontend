import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupFields } from "../../../../Core/constants/formFields";
import FormAction from "../../../../Core/components/FormAction";
import Input from "../../../../Core/components/Input";
import StudentSignupUseCase from "../../../../Domain/UseCases/Students/signupUseCase";
import Failure from "../../../../Core/Failure/Failure";
import API_ROUTES from "../../../../Core/constants/Routs";

const fields = signupFields;
let fieldsState = {};
let fieldsErrorState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));
fields.forEach((field) => (fieldsErrorState[field.id] = null));

export default function Signup() {
  const navigation = useNavigate();
  const [signupState, setSignupState] = useState(fieldsState);
  const [errorState, setErrorState] = useState(fieldsErrorState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const signupResult = StudentSignupUseCase(signupState);
    signupResult.then((result) => {
      if (result instanceof Failure) {
        handleErrors(result);
      } else {
        clearErrors();
        console.log("signup result is");
        console.log(result);
        navigation(API_ROUTES.LOGIN);
      }
    });
  };

  const clearErrors = () => {
    let newErrorState = {};
    fields.forEach((field) => (newErrorState[field.id] = null));
    newErrorState.non_field_errors = null;
    setErrorState(newErrorState);
  };

  const handleErrors = (result) => {
    let newErrorState = {};
    fields.forEach((field) => (newErrorState[field.id] = null));
    newErrorState.school = result.school;
    newErrorState.degree = result.degree;
    newErrorState.field = result.field;
    newErrorState.first_name = result.user.first_name;
    newErrorState.last_name = result.user.last_name;
    newErrorState.email = result.user.email;
    newErrorState.username = result.user.username;
    newErrorState.phone_number = result.user.phone_number;
    newErrorState.password1 = result.user.password1;
    newErrorState.password2 = result.user.password2;
    setErrorState(newErrorState);
  };

  return (
    <form className="mt-8 space-y-6 auth-form" onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
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
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}
