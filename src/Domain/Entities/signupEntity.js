class SignUpL1Success {
  constructor({id, first_name, last_name, email, phone_number, role, username}) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone_number = phone_number;
    this.role = role;
    this.username = username;
  }
}

class SignUpL2Success {
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
export {SignUpL1Success, SignUpL2Success};
