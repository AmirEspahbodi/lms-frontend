import VerifyCodeComponent from "../../../../../Core/components/VerifyCodeComponnent.jsx";
import {PasswordResetVerifyCodeUseCase} from "../../../../../Domain/UseCases/common/passwordResetUseCase.js";
import {PasswordResetVerifyCodeFailure} from "../../../../../Core/Failure/PasswordResetFailure.jsx";

export default function PasswordResetVerifyCodeComponent ({code, setCode, goToGetPassword}){
    return VerifyCodeComponent({
            code:code,
            setCode:setCode,
            VerifyCodeUseCase:PasswordResetVerifyCodeUseCase,
            VerifyCodeFailure:PasswordResetVerifyCodeFailure,
            goToNext: goToGetPassword
        }
    )
}
