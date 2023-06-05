import Failure from "./Failure";

class LoginFailure extends Failure {
  constructor({
    non_field_errors = null,
    login_field = null,
    password = null,
  }) {
    super();
    this.non_field_errors = non_field_errors;
    this.login_field = login_field;
    this.password = password;
  }
}

export default LoginFailure;
