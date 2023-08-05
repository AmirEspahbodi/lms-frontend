class EmailVerificationGetCodeResponseModel {
  constructor(detail, time = null) {
    this.detail = detail;
    this.time = time;
  }
}

class EmailVerificationSendCodeResponseModel {
  constructor(detail, time = null) {
    this.detail = detail;
    this.time = time;
  }
}

export {
  EmailVerificationGetCodeResponseModel,
  EmailVerificationSendCodeResponseModel,
};
