import { useState } from "react";
import Failure from "../../../../../Core/Failure/Failure.js";
import ServerConnectionFailure from "../../../../../Core/Failure/ServerConnectionFailure.js";
import UnknownFailure from "../../../../../Core/Failure/UnknownFailure.js";
import FormAction from "../../../../../Core/components/FormAction.jsx";
import Input from "../../../../../Core/components/Input.jsx";
import {PasswordResetConfirmUseCase} from "../../../../../Domain/UseCases/common/passwordResetUseCase.js";
import {PasswordResetConfirmFailure} from "../../../../../Core/Failure/PasswordResetFailure.js";
import {PasswordResetField} from "../../../../../Core/constants/FormFields.js";
import {useNavigate} from "react-router-dom";

const fields = PasswordResetField;
let fieldsErrorState = {};
let fieldsState = {};
fields.forEach((field) => (fieldsErrorState[field.id] = null));
fields.forEach((field) => (fieldsState[field.id] = ''));

function PasswordResetConfirmComponent({ code, goNext}) {
    const [errorState, setErrorState] = useState(fieldsErrorState);
    const [emailState, setEmailState] = useState(fieldsState);

    const handleChange = async (e) =>
        setEmailState({ ...emailState, [e.target.id]: e.target.value });

    const handelSubmit = async (e) => {
        e.preventDefault();
        const result = await PasswordResetConfirmUseCase({code:code, ...emailState});
        if (result instanceof Failure) {
            handleErrors(result);
        } else {
            clearErrors();
            goNext();
        }
    };
    const clearErrors = () => {
        let newErrorState = {};
        fields.forEach((field) => (newErrorState[field.id] = null));
        newErrorState.detail = null;
        newErrorState.non_field_errors = null;
        setErrorState(newErrorState);
    };
    const handleErrors = (result) => {
        let fieldsErrorState;
        if (result instanceof PasswordResetConfirmFailure) {
            fieldsErrorState = {
                detail: result.detail,
                non_field_error: result.non_field_error,
                password1: result.password1,
                password2: result.password2,
                code: result.code,
                time: result.time,
            };
        } else if (result instanceof ServerConnectionFailure) {
            fieldsErrorState = { non_field_error: "could't connect to server" };
        } else if (result instanceof UnknownFailure) {
            fieldsErrorState = { non_field_error: "unknown failure" };
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
                    <p className="signup_error">{
                        errorState.non_field_errors ?
                            errorState.non_field_errors : errorState.detail ?
                                errorState.detail : errorState.time}</p>
                </div>
                <FormAction handleSubmit={handelSubmit} text="get code" />
            </form>
        </>
    );
}

export default PasswordResetConfirmComponent;
