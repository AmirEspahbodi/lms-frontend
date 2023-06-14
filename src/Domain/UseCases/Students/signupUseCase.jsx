import StudentsignUPRepositoory from "../../../Data/Repositories/Students/SignupRepository";

async function StudentSignupUseCase(signupState) {
  return await StudentsignUPRepositoory(signupState);
}

export default StudentSignupUseCase;
