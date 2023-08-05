import axios from "axios";
import SERVER_APIS from "../../../../Core/constants/ServerAPIs.jsx";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure.jsx";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure.jsx";
import {
    PasswordResetConfirmResponseModel, PasswordResetGetCodeResponseModel,
    PasswordResetVerifyCodeResponseModel
} from "../../../Models/passwordReestResponseModel.js";
import {
    PasswordResetConfirmFailure, PasswordResetGetCodeFailure,
    PasswordResetVerifyCodeFailure
} from "../../../../Core/Failure/PasswordResetFailure.jsx";


async function PasswordResetGetCodeAPI(email) {
    try {
        const response = await axios.post(
            SERVER_APIS.PASSWORD_RESET_REQUEST_CODE,
            email
        );
        return new PasswordResetGetCodeResponseModel(response.data);
    } catch (error) {
        if (error.response) {
            return new PasswordResetGetCodeFailure(error.response.data);
        } else if (error.request) {
            return new ServerConnectionFailure();
        } else {
            return new UnknownFailure();
        }
    }
}

async function PasswordResetVerifyCodeAPI(code) {
    try {
        console.log(code)
        const response = await axios.post(
            SERVER_APIS.PASSWORD_RESET_VERIFY_CODE,
            code
        );
        console.log(response)
        return new PasswordResetVerifyCodeResponseModel(response.data);
    } catch (error) {
        console.log(error)
        if (error.response) {
            return new PasswordResetVerifyCodeFailure(error.response.data);
        } else if (error.request) {
            return new ServerConnectionFailure();
        } else {
            return new UnknownFailure();
        }
    }
}

async function PasswordResetConfirmAPI(confirmData) {
    try {
        console.log(confirmData)
        const response = await axios.post(
            SERVER_APIS.PASSWORD_RESET_CONFIRM,
            confirmData
        );
        return new PasswordResetConfirmResponseModel(response.data);
    } catch (error) {
        console.log(error)
        if (error.response) {
            return new PasswordResetConfirmFailure(error.response.data);
        } else if (error.request) {
            return new ServerConnectionFailure();
        } else {
            return new UnknownFailure();
        }
    }
}

export {PasswordResetGetCodeAPI, PasswordResetVerifyCodeAPI, PasswordResetConfirmAPI};