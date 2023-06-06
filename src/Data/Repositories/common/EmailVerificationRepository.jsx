import {
  EmailVerificationSendCodeAPI,
  EmailVerificationGetCodeAPI,
} from "../../DataSource/API/common/EmailVerificationAPI";

async function EmailVerificationGetCodeRepository(emailData) {
  return await EmailVerificationGetCodeAPI(emailData);
}
async function EmailVerificationSendCodeRepository(codeData) {
  return await EmailVerificationSendCodeAPI(codeData);
}
export {
  EmailVerificationGetCodeRepository,
  EmailVerificationSendCodeRepository,
};
