const SERVER = "http://127.0.0.1:8000";
const SERVER_APIS = {
  SIGNUPL1: `${SERVER}/apis/accounts/signup_l1/`,
  SIGNUPL2: `${SERVER}/apis/accounts/signup_l2/`,
  LOGIN: `${SERVER}/apis/accounts/login/`,
  TOKEN_VERIFY: `${SERVER}/apis/accounts/token/verify/`,
  LOGOUT: `${SERVER}/apis/accounts/logout/`,
  LOGOUT_ALL: `${SERVER}/apis/accounts/logout_all/`,

  PASSWORD_RESET_REQUEST_CODE:
    `${SERVER}/apis/accounts/password/reset/get_code/`,
  PASSWORD_RESET_VERIFY_CODE:
    `${SERVER}/apis/accounts/password/reset/verify_code/`,
  PASSWORD_RESET_CONFIRM:
    `${SERVER}/apis/accounts/password/reset/confirm/`,

  EMAIL_VERIFICATION_REQUEST_CODE:
    `${SERVER}/apis/accounts/email/verification/get_code/`,
  EMAIL_VERIFICATION_CONFIRM:
    `${SERVER}/apis/accounts/email/verification/confirm/`,

  STUDENT_HOME: `${SERVER}/apis/students/home/`,
  TEACHER_HOME: `${SERVER}/apis/teachers/home/`,
  COURSE_SEARCH: `${SERVER}/apis/courses/search/`,
  STUDENT_FINANCIAL_AIDS: `${SERVER}/apis/students/financial-aids/`,
  COURSE_SEARCH_DETAIL: (courseID) =>`${SERVER}/apis/courses/search/${courseID}/`,
  STUDENT_COURSE_DETAIL: (courseID) =>
    `${SERVER}/apis/students/course/${courseID}/`,
  FINANCIAL_AID: (courseID) =>
      `${SERVER}/apis/courses/${courseID}/financial-aid/`,
  TEACHER_COURSE_DETAIL: (courseID) =>
    `${SERVER}/apis/teachers/course/${courseID}/`,
  TEACHER_COURSE_GET_STUDENTS: (courseID) =>
    `${SERVER}/apis/teachers/course/${courseID}/setting/students/`,
  TEACHER_COURSE_GET_FINANCIAL_AIDS: (courseID) =>
      `${SERVER}/apis/teachers/course/${courseID}/financial-aids/`,
  TEACHER_SESSION: (sessionID) =>
    `${SERVER}/apis/teachers/session/${sessionID}/`,
};

export default SERVER_APIS;
