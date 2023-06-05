class LoginResponseModel {
  constructor({
    user_id,
    username,
    first_name,
    last_name,
    expiry,
    last_use_to_expire,
    role,
    token,
  }) {
    {
      this.user_id = user_id;
      this.username = username;
      this.first_name = first_name;
      this.last_name = last_name;
      this.expiry = expiry;
      this.role = role;
      this.last_use_to_expire = {
        seconds: last_use_to_expire.seconds,
        days: last_use_to_expire.days,
      };
      this.token = token;
    }
  }
}

export default LoginResponseModel;
