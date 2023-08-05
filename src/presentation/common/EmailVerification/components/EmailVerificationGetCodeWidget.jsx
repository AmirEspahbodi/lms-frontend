import { useState } from "react";
import FormAction from "../../../../Core/components/FormAction";
import Input from "../../../../Core/components/Input";
import { EmailRequestCodeField } from "../../../../Core/constants/FormFields.js";
import { EmailVerificationGetCodeUseCase } from "../../../../Domain/UseCases/common/EmailVerificationUseCase.js";
import Failure from "../../../../Core/Failure/Failure.js";
import { EmailVerificationGetCodeFailure } from "../../../../Core/Failure/EmailVerificationFailure.js";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure.js";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure.js";
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
