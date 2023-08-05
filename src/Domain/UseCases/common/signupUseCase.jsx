import {SignupL2Repository, SignupL1Repository} from "../../../Data/Repositories/common/SignupRepository.jsx";

async function SignupL1UseCase(signupState) {
  return await SignupL1Repository(signupState);
}

async function SignupL2UseCase(signupState) {
  return await SignupL2Repository(signupState);
}

export {SignupL2UseCase, SignupL1UseCase};