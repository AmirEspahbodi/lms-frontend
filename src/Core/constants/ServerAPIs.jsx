const SERVER_APIS = {
  STUDENT_SIGNUP: "http://127.0.0.1:8000/apis/students/register/",
  LOGIN: "http://127.0.0.1:8000/apis/accounts/login/",
  TOKEN_VERIFY: "http://127.0.0.1:8000/apis/accounts/token/verify/",

  PASSWORD_RESET_REQUEST_CODE:
    "http://127.0.0.1:8000/apis/accounts/password/reset/get_code/",
  PASSWORD_RESET_VERIFY_CODE:
    "http://127.0.0.1:8000/apis/accounts/password/reset/verify_code/",
  PASSWORD_RESET_CONFIRM:
    "http://127.0.0.1:8000/apis/accounts/password/reset/confirm/",

  EMAIL_VERIFICATION_REQUEST_CODE:
    "http://127.0.0.1:8000/apis/accounts/email/verification/get_code/",
  EMAIL_VERIFICATION_CONFIRM:
    "http://127.0.0.1:8000/apis/accounts/email/verification/confirm/",

  STUDENT_HOME: "http://127.0.0.1:8000/apis/students/home/",
  TEACHER_HOME: "http://127.0.0.1:8000/apis/teachers/home/",
};

export default SERVER_APIS;
