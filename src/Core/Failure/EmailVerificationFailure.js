import Failure from "./Failure.js";

class EmailVerificationGetCodeFailure extends Failure {
  constructor({ detail, non_field_errors=null, time=time}) {
    super();
    this.detail = detail;
    this.non_field_errors = non_field_errors;
    this.time = time;
  }
}

class EmailVerificationSendCodeFailure extends Failure {
  constructor({ detail, non_field_error=null }) {
    super();
    this.detail = detail;
    this.non_field_error=non_field_error;
  }
}

export { EmailVerificationGetCodeFailure, EmailVerificationSendCodeFailure };
