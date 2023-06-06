import {
  EmailVerificationGetCodeFailure,
  EmailVerificationSendCodeFailure,
} from "../../../../Core/Failure/EmailVerificationFailure";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure";
import {
  EmailVerificationGetCodeResponseModel,
  EmailVerificationSendCodeResponseModel,
} from "../../../Models/EmailVerificationResponseModel";
import SERVER_APIS from "../../../../Core/constants/ServerAPIs";
import axios from "axios";

async function EmailVerificationGetCodeAPI(emailData) {
  try {
    console.log("EmailVerificationGetCodeAPI()");
    const response = await axios.post(
      SERVER_APIS.EMAIL_VERIFICATION_REQUEST_CODE,
      emailData
    );
    return new EmailVerificationGetCodeResponseModel(response.data);
  } catch (error) {
    if (error.response) {
      return new EmailVerificationGetCodeFailure(error.response.data);
    } else if (error.request) {
      return new ServerConnectionFailure();
    } else {
      return new UnknownFailure();
    }
  }
}

async function EmailVerificationSendCodeAPI(codeData) {
  try {
    console.log("EmailVerificationSendCodeAPI()");
    console.log(codeData);
    console.log(SERVER_APIS.EMAIL_VERIFICATION_CONFIRM);
    const response = await axios.post(
      SERVER_APIS.EMAIL_VERIFICATION_CONFIRM,
      codeData
    );
    return new EmailVerificationSendCodeResponseModel(response.data);
  } catch (error) {
    if (error.response) {
      return new EmailVerificationSendCodeFailure(error.response.data);
    } else if (error.request) {
      return new ServerConnectionFailure();
    } else {
      return new UnknownFailure();
    }
  }
}

export { EmailVerificationGetCodeAPI, EmailVerificationSendCodeAPI };
