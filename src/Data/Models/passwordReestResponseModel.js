class PasswordResetGetCodeResponseModel {
    constructor({detail}) {
        this.detail = detail;
    }
}

class PasswordResetVerifyCodeResponseModel {
    constructor({detail}) {
        this.detail = detail;
    }
}

class PasswordResetConfirmResponseModel {
    constructor({detail}) {
        this.detail = detail;
    }
}

export {
    PasswordResetGetCodeResponseModel,
    PasswordResetVerifyCodeResponseModel,
    PasswordResetConfirmResponseModel
};
