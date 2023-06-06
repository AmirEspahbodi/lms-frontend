import { useState } from "react";
import Header from "../../../Core/components/Header";
import APP_ROUTES from "../../../Core/constants/Routs";
import EmailVerificationVerify from "./components/EmailVerificationVerifyWidget";
import EmailVerificationGetCode from "./components/EmailVerificationGetCodeWidget";
import { EmailRequestCodeField } from "../../../Core/constants/formFields";

const fields = EmailRequestCodeField;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

function EmailVerificationView() {
  const [emailState, setEmailState] = useState(fieldsState);
  const [isSendingEmail, setIsSendingEmail] = useState(true);

  const goToGetCode = () => {
    setIsSendingEmail(false);
  };

  const backToSendEmail = () => {
    setIsSendingEmail(true);
  };

  if (isSendingEmail)
    return (
      <div>
        <Header
          heading="get code to verify email address"
          paragraph="has any problem to get code? "
          linkName="Contact Us"
          linkUrl={APP_ROUTES.CONTACT_US}
        />
        <EmailVerificationGetCode
          goToGetCode={goToGetCode}
          emailState={emailState}
          setEmailState={setEmailState}
        />
      </div>
    );
  else
    return (
      <div>
        <Header
          heading="send code to verify email address"
          paragraph="has any problem to send code? "
          linkName="Contact Us"
          linkUrl={APP_ROUTES.CONTACT_US}
        />
        <EmailVerificationVerify />
      </div>
    );
}

export default EmailVerificationView;
