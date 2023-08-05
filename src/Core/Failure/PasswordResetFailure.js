import Failure from "./Failure.js";

class PasswordResetGetCodeFailure extends Failure {
    constructor({ detail, non_field_errors=null, time=null }) {
        super();
        this.detail = detail;
        this.non_field_errors = non_field_errors;
        this.time = time;
    }
}


class PasswordResetVerifyCodeFailure extends Failure {
    constructor({ detail, non_field_error=null }) {
        super();
        this.detail = detail;
        this.non_field_error=non_field_error;
    }
}


class PasswordResetConfirmFailure extends Failure {
    constructor({ detail, password1=null, password2=null, code=null ,non_field_error=null , time=null}) {
        super();
        this.detail = detail;
        this.non_field_error=non_field_error;
        this.password1 = password1;
        this.password2 = password2;
        this.code = code;
    }
}


export { PasswordResetGetCodeFailure, PasswordResetVerifyCodeFailure, PasswordResetConfirmFailure };
