import {
    PasswordResetConfirmAPI,
    PasswordResetGetCodeAPI,
    PasswordResetVerifyCodeAPI
} from "../../DataSource/API/common/passwordResetAPI.js";

async function PasswordResetGetCodeRepository(email){
    return await PasswordResetGetCodeAPI(email);
}
async function PasswordResetVerifyCodeRepository(code){
    return await PasswordResetVerifyCodeAPI(code);
}
async function PasswordResetConfirmRepository(confirmData){
    return await PasswordResetConfirmAPI(confirmData);
}

export {PasswordResetGetCodeRepository, PasswordResetVerifyCodeRepository, PasswordResetConfirmRepository}
