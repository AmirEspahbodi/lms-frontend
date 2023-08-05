import Failure from "./Failure.js";
class SignUpL1Failure extends Failure {
  constructor({
    first_name = null,
    last_name = null,
    email = null,
    phone_number = null,
    role = null,
    username = null,
    password1 = null,
    password2 = null,
  }) {
    super();
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone_number = phone_number;
    this.role = role;
    this.username = username;
    this.password1 = password1
    this.password2 = password2
  }
}

class SignUpL2Failure extends Failure {
  constructor({
                user_id,
                national_code,
                secondary_phone_number,
                province,
                city,
                address,
                postal_code,
                date_of_birth,
                father_name,
                home_phone_number,
              }) {
    super();
    this.user_id = user_id;
    this.national_code = national_code;
    this.secondary_phone_number = secondary_phone_number;
    this.province = province;
    this.city = city;
    this.address = address;
    this.postal_code = postal_code;
    this.date_of_birth = date_of_birth;
    this.father_name = father_name;
    this.home_phone_number = home_phone_number;
  }
}

export {SignUpL2Failure, SignUpL1Failure}