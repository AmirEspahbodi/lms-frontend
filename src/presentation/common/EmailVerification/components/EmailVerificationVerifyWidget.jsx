import VerifyCodeComponent from "../../../../Core/components/VerifyCodeComponnent.jsx";
import {EmailVerificationSendCodeUseCase} from "../../../../Domain/UseCases/common/EmailVerificationUseCase.jsx";
import {EmailVerificationSendCodeFailure} from "../../../../Core/Failure/EmailVerificationFailure.jsx";
import APP_ROUTES from "../../../../Core/constants/Routs.jsx";
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
