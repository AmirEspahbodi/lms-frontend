import {
    PasswordResetConfirmRepository,
    PasswordResetGetCodeRepository,
    PasswordResetVerifyCodeRepository
} from "../../../Data/Repositories/common/passwordResetRepository.js";


async function PasswordResetGetCodeUseCase(email) {
    return await PasswordResetGetCodeRepository(email)
}

async function PasswordResetVerifyCodeUseCase(code) {
    return await PasswordResetVerifyCodeRepository(code)
}

async function PasswordResetConfirmUseCase(confirmData) {
    return await PasswordResetConfirmRepository(confirmData)
}

export {PasswordResetGetCodeUseCase, PasswordResetVerifyCodeUseCase, PasswordResetConfirmUseCase}