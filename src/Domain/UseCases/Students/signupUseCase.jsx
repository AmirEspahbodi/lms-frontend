import Failure from "../../../Core/Failure/Failure";
import StudentsignUPRepositoory from "../../../Data/Repositories/Students/SignupRepository";

async function StudentSignupUseCase(signupState) {
  const signupResult = await StudentsignUPRepositoory(signupState);
  return signupResult;
}

export default StudentSignupUseCase;
