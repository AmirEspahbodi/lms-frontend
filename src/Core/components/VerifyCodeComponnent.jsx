import { useState } from "react";
import FormAction from "./FormAction";
import Input from "./Input";
import { SixDigitCodeField } from "../constants/FormFields.js";
import Failure from "../Failure/Failure.js";
import ServerConnectionFailure from "../Failure/ServerConnectionFailure.js";
import UnknownFailure from "../Failure/UnknownFailure.js";

const fields = SixDigitCodeField;
let fieldsErrorState = {};
let fieldsState = {};
fields.forEach((field) => (fieldsErrorState[field.id] = null));
fields.forEach((field) => (fieldsState[field.id] = ""));

function VerifyCodeComponent({code, setCode, VerifyCodeUseCase, VerifyCodeFailure, goToNext}) {
    fieldsState[fields[0].id] = code;
    const [errorState, setErrorState] = useState(fieldsErrorState);
    const [codeState, setCodeState] = useState(fieldsState)
    const handleChange = async (e) =>
        setCodeState({ ...codeState, [e.target.id]: e.target.value });

    const handelSubmit = async (e) => {
        e.preventDefault();
        const result = await VerifyCodeUseCase(codeState);
        console.log(result);
        if (result instanceof Failure) {
            handleErrors(result);
        } else {
            clearErrors();
            setCode(codeState[fields[0].id])
            goToNext()
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
        if (result instanceof VerifyCodeFailure) {
            fieldsErrorState = {
                password1:result.password1,
                password2:result.password2,
                code:result.code,
                detail: result.detail,
                non_field_errors: result.non_field_errors};
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
                    <p className="signup_error">{errorState.non_field_errors ?? errorState.detail}</p>
                </div>
                <FormAction handleSubmit={handelSubmit} text="get code" />
            </form>
        </>
    );
}

export default VerifyCodeComponent;
