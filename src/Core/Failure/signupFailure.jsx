import Failure from "./Failure";

class UserSignUpFailure extends Failure {
  constructor({
    first_name = null,
    last_name = null,
    email = null,
    username = null,
    phone_number = null,
    password1 = null,
    password2 = null,
  }) {
    super();
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.username = username;
    this.phone_number = phone_number;
    this.password1 = password1;
    this.password2 = password2;
  }
}
class SignUpFailure extends Failure {
  constructor({ school = null, degree = null, field = null, user = null }) {
    super();
    this.school = school;
    this.degree = degree;
    this.field = field;
    this.user = new UserSignUpFailure(user);
  }
}

export default SignUpFailure;
