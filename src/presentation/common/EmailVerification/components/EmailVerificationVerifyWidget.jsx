import VerifyCodeComponent from "../../../../Core/components/VerifyCodeComponnent.jsx";
import {EmailVerificationSendCodeUseCase} from "../../../../Domain/UseCases/common/EmailVerificationUseCase.js";
import {EmailVerificationSendCodeFailure} from "../../../../Core/Failure/EmailVerificationFailure.js";
import APP_ROUTES from "../../../../Core/constants/Routs.js";
import {useNavigate} from "react-router-dom";

function EmailVerificationSendCode() {
  const navigate = useNavigate();
  return VerifyCodeComponent({
    code: '',
    setCode:(code) => {},
    VerifyCodeUseCase:EmailVerificationSendCodeUseCase,
    VerifyCodeFailure:EmailVerificationSendCodeFailure,
    goToNext: () => {
      navigate(APP_ROUTES.LOGIN_USER);
    }
  })
}

export default EmailVerificationSendCode;
