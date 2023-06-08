import { useState } from "react";
import AuthHeader from "../../../Core/components/AuthHeader";
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
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <AuthHeader
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
        </div>
      </div>
    );
  else
    return (
      <div>
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <AuthHeader
              heading="send code to verify email address"
              paragraph="has any problem to send code? "
              linkName="Contact Us"
              linkUrl={APP_ROUTES.CONTACT_US}
            />
            <EmailVerificationVerify />
          </div>
        </div>
      </div>
    );
}

export default EmailVerificationView;
