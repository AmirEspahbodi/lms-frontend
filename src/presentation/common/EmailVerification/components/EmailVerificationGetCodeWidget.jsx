import { useState } from "react";
import FormAction from "../../../../Core/components/FormAction";
import Input from "../../../../Core/components/Input";
import { EmailRequestCodeField } from "../../../../Core/constants/formFields";
import { EmailVerificationGetCodeUseCase } from "../../../../Domain/UseCases/common/EmailVerificationUseCase";
import Failure from "../../../../Core/Failure/Failure";
import { EmailVerificationGetCodeFailure } from "../../../../Core/Failure/EmailVerificationFailure";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure";
import EmailGetCode from "../../../../Core/components/SendEmailComponent.jsx";

const fields = EmailRequestCodeField;
let fieldsErrorState = {};
fields.forEach((field) => (fieldsErrorState[field.id] = null));

function EmailVerificationGetCode({ goToGetCode, emailState, setEmailState }) {
  return EmailGetCode(
      {
        goToGetCode:goToGetCode, email:emailState, setEmail:setEmailState,
        GetCodeUseCase:EmailVerificationGetCodeUseCase, FailureClass:EmailVerificationGetCodeFailure
      }
  )
}

export default EmailVerificationGetCode;
