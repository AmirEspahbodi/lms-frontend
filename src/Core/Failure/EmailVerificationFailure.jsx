import Failure from "./Failure";

class EmailVerificationGetCodeFailure extends Failure {
  constructor({ detail }) {
    super();
    this.detail = detail;
  }
}

class EmailVerificationSendCodeFailure extends Failure {
  constructor({ detail, non_field_error }) {
    super();
    this.detail = detail;
  }
}

export { EmailVerificationGetCodeFailure, EmailVerificationSendCodeFailure };
