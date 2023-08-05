import EmailGetCode from "../../../../../Core/components/SendEmailComponent.jsx";
import {PasswordResetGetCodeFailure} from "../../../../../Core/Failure/PasswordResetFailure.js";
import {PasswordResetGetCodeUseCase} from "../../../../../Domain/UseCases/common/passwordResetUseCase.js";

export default function PasswordResetSendEmailComponent ({goToGetCode, email, setEmail}){
    return EmailGetCode(
        {
            goToGetCode:goToGetCode, email:email, setEmail:setEmail,
            GetCodeUseCase:PasswordResetGetCodeUseCase, FailureClass:PasswordResetGetCodeFailure
        }
    )
}
