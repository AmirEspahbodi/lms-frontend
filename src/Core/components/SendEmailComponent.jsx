import { useState } from "react";
import FormAction from "./FormAction";
import Input from "./Input";
import { EmailRequestCodeField } from "../constants/FormFields.js";
import Failure from "../Failure/Failure.js";
import ServerConnectionFailure from "../Failure/ServerConnectionFailure.js";
import UnknownFailure from "../Failure/UnknownFailure.js";

const fields = EmailRequestCodeField;
let fieldsErrorState = {};
let fieldsState = {};
fields.forEach((field) => (fieldsErrorState[field.id] = null));
fields.forEach((field) => (fieldsState[field.id] = ''));

function EmailGetCode({ goToGetCode, email, setEmail, GetCodeUseCase, FailureClass }) {
    fieldsState[fields[0].id] = email;
    const [errorState, setErrorState] = useState(fieldsErrorState);
    const [emailState, setEmailState] = useState(fieldsState);

    const handleChange = async (e) =>
        setEmailState({ ...emailState, [e.target.id]: e.target.value });

    const handelSubmit = async (e) => {
        e.preventDefault();
        const result = await GetCodeUseCase(emailState);
        if (result instanceof Failure) {
            handleErrors(result);
        } else {
            clearErrors();
            setEmail(fieldsState[fields[0].id])
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
        if (result instanceof FailureClass) {
            fieldsErrorState = { email: result.detail ?? result.non_field_errors, time:result.time };
        } else if (result instanceof ServerConnectionFailure) {
            fieldsErrorState = { non_field_errors: "could't connect to server" };
        } else if (result instanceof UnknownFailure) {
            fieldsErrorState = { non_field_errors: "unknown failure" };
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
                    <p className="signup_error">{errorState.non_field_errors ?? errorState.detail} {errorState.time && <span>try {errorState.time.hours !==0 && errorState.time.hours+"h"} {errorState.time.minutes!==0 && errorState.time.minutes+"m"} {errorState.time.seconds!==0 &&errorState.time.seconds+"s"}  later </span>}</p>
                </div>
                <FormAction handleSubmit={handelSubmit} text="get code" />
            </form>
        </>
    );
}

export default EmailGetCode;
