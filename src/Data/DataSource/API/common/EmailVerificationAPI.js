import {
  EmailVerificationGetCodeFailure,
  EmailVerificationSendCodeFailure,
} from "../../../../Core/Failure/EmailVerificationFailure.js";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure.js";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure.js";
import {
  EmailVerificationGetCodeResponseModel,
  EmailVerificationSendCodeResponseModel,
} from "../../../Models/EmailVerificationResponseModel.js";
import SERVER_APIS from "../../../../Core/constants/ServerAPIs.js";
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
