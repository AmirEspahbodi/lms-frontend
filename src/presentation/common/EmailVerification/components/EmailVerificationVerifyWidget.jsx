import { useState } from "react";
import FormAction from "../../../../Core/components/FormAction";
import Input from "../../../../Core/components/Input";
import { EmailVerificationSendCodeUseCase } from "../../../../Domain/UseCases/common/EmailVerificationUseCase";
import Failure from "../../../../Core/Failure/Failure";
import { EmailVerificationSendCodeFailure } from "../../../../Core/Failure/EmailVerificationFailure";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure";
import { SixDigitCodeField } from "../../../../Core/constants/formFields";
import { useNavigate } from "react-router-dom";
import APP_ROUTES from "../../../../Core/constants/Routs";

const fields = SixDigitCodeField;
let fieldsErrorState = {};
let fieldsState = {};
fields.forEach((field) => (fieldsErrorState[field.id] = null));
fields.forEach((field) => (fieldsState[field.id] = ""));

function EmailVerificationSendCode({}) {
  const [errorState, setErrorState] = useState(fieldsErrorState);
  const [codeState, setCodeState] = useState(fieldsState);
  const navigate = useNavigate();

  const handleChange = async (e) =>
    setCodeState({ ...codeState, [e.target.id]: e.target.value });

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log("here in handelSubmit()\ncodeState:");
    console.log(codeState);
    const result = await EmailVerificationSendCodeUseCase(codeState);
    console.log(result);
    if (result instanceof Failure) {
      handleErrors(result);
    } else {
      clearErrors();
      navigate(APP_ROUTES.LOGIN_USER);
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
    if (result instanceof EmailVerificationSendCodeFailure) {
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
      <form className="mt-8 space-y-6" onSubmit={handelSubmit}>
        <div className="-space-y-px">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={codeState[field.id]}
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

export default EmailVerificationSendCode;
