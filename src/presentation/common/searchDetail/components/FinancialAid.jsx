import {FinancialAidField} from "../../../../Core/constants/FormFields.js";
import {useState} from "react";
import Input from "../../../../Core/components/Input.jsx";
import FormAction from "../../../../Core/components/FormAction.jsx";
import financialAidUseCase from "../../../../Domain/UseCases/common/financialAidUseCase.js";
import Failure from "../../../../Core/Failure/Failure.js";
import {useParams} from "react-router-dom";

const fields = FinancialAidField;
let fieldsState = {};
let fieldsErrorState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));
fields.forEach((field) => (fieldsErrorState[field.id] = null));

export default function FinancialAid(props) {
    const [financialAidState, setFinancialAidState] = useState(fieldsState);
    const [errorState, setErrorState] = useState(fieldsErrorState);
    const handleChange = (e) => {
        setFinancialAidState({ ...financialAidState, [e.target.id]: e.target.value });
    };
    const { courseId } = useParams();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await financialAidUseCase(
            {
                course_id: courseId,
                data: financialAidState
            }
        )
        if (result instanceof Failure) {
            handleErrors(result);
        } else {
            clearErrors()
            alert("request has been sent")
            props.setFinancialAidSend(true);
            props.setModalTop(-100);
        }
    }
    const clearErrors = () => {
        let newErrorState = {};
        fields.forEach((field) => (newErrorState[field.id] = null));
        setErrorState(newErrorState);
    };

    const handleErrors = (result) => {
        let newErrorState = {};
        fields.forEach((field) => (newErrorState[field.id] = null));
        newErrorState.detail = result.detail;
        setErrorState(newErrorState);
    };
    return (
        <form
            className="mt-8 space-y-6 auth-form" onSubmit={handleSubmit}
            style={{padding:"30px"}}
        >
            <div className="-space-y-px">
                {fields.map((field) => (
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={financialAidState[field.id]}
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
                <p className="signup_error">{errorState.detail}</p>
            </div>
            <FormAction handleSubmit={handleSubmit} text="Send" />
        </form>
    )
}