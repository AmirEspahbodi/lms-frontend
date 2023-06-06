import {
  EmailVerificationGetCodeRepository,
  EmailVerificationSendCodeRepository,
} from "../../../Data/Repositories/common/EmailVerificationRepository";

async function EmailVerificationGetCodeUseCase(emailData) {
  return await EmailVerificationGetCodeRepository(emailData);
}

async function EmailVerificationSendCodeUseCase(codeData) {
  return await EmailVerificationSendCodeRepository(codeData);
}

export { EmailVerificationGetCodeUseCase, EmailVerificationSendCodeUseCase };
