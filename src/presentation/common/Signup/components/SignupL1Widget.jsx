import { useState } from "react";
import { signupL1Fields } from "../../../../Core/constants/FormFields.js";
import FormAction from "../../../../Core/components/FormAction.jsx";
import Input from "../../../../Core/components/Input.jsx";
import {SignupL1UseCase} from "../../../../Domain/UseCases/common/signupUseCase.js";
import Failure from "../../../../Core/Failure/Failure.js";

const fields = signupL1Fields;
let fieldsState = {};
let fieldsErrorState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));
fields.forEach((field) => (fieldsErrorState[field.id] = null));

export default function SignupL1({setSignupL1Data}) {
  const [signupState, setSignupState] = useState(fieldsState);
  const [errorState, setErrorState] = useState(fieldsErrorState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const signupResult = SignupL1UseCase(signupState);
    signupResult.then((result) => {
      console.log(result)
      if (result instanceof Failure) {
        handleErrors(result);
      } else {
        clearErrors();
        setSignupL1Data({
          userId:result.id,
          level:2
        })
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
    fields.forEach((field) => (newErrorState[field.id] = result[field.id] ?? null));
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
        <FormAction handleSubmit={handleSubmit} text="next" />
      </div>
    </form>
  );
}
