import { useState } from "react";
import FormAction from "../../../../Core/components/FormAction";
import Input from "../../../../Core/components/Input";
import { EmailRequestCodeField } from "../../../../Core/constants/formFields";
import { EmailVerificationGetCodeUseCase } from "../../../../Domain/UseCases/common/EmailVerificationUseCase";
import Failure from "../../../../Core/Failure/Failure";
import { EmailVerificationGetCodeFailure } from "../../../../Core/Failure/EmailVerificationFailure";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure";

const fields = EmailRequestCodeField;
let fieldsErrorState = {};
fields.forEach((field) => (fieldsErrorState[field.id] = null));

function EmailVerificationGetCode({ goToGetCode, emailState, setEmailState }) {
  const [errorState, setErrorState] = useState(fieldsErrorState);

  const handleChange = async (e) =>
    setEmailState({ ...emailState, [e.target.id]: e.target.value });

  const handelSubmit = async (e) => {
    e.preventDefault();
    const result = await EmailVerificationGetCodeUseCase(emailState);
    if (result instanceof Failure) {
      handleErrors(result);
    } else {
      clearErrors();
      goToGetCode();
    }
  };
  const clearErrors = () => {
    let newErrorState = {};
    fields.forEach((field) => (newErrorState[field.id] = null));
    newErrorState.non_field_errors = null;
    setErrorState(newErrorState);
  };
  const handleErrors = (result) => {
    let fieldsErrorState;
    if (result instanceof EmailVerificationGetCodeFailure) {
      fieldsErrorState = { email: result.detail };
    } else if (result instanceof ServerConnectionFailure) {
      fieldsErrorState = { email: "could't connect to server" };
    } else if (result instanceof UnknownFailure) {
      fieldsErrorState = { email: "unknown failure" };
    }
    setErrorState(fieldsErrorState);
  };

  return (
    <>
      <form className="mt-8 space-y-6 auth-form" onSubmit={handelSubmit}>
        <div className="-space-y-px">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={emailState[field.id]}
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
        <FormAction handleSubmit={handelSubmit} text="get code" />
      </form>
    </>
  );
}

export default EmailVerificationGetCode;
