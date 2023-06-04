import StudentSignupAPI from "../../DataSource/API/students/signupAPI";

async function StudentsignUPRepositoory(signupState) {
  const signupData = {
    school: signupState.school,
    degree: signupState.degree,
    field: signupState.field,
    user: {
      first_name: signupState.first_name,
      last_name: signupState.last_name,
      email: signupState.email,
      username: signupState.username,
      phone_number: signupState.phone_number,
      password1: signupState.password1,
      password2: signupState.password2,
    },
  };
  const response = await StudentSignupAPI(signupData);
  return response;
}

export default StudentsignUPRepositoory;
