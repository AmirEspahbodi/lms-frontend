import {StudentL2SignupAPI, StudentL1SignupAPI} from "../../DataSource/API/common/signupAPI.jsx";

async function SignupL1Repository(signupState) {
  return await StudentL1SignupAPI(signupState);
}

async function SignupL2Repository(signupState) {
  return await StudentL2SignupAPI(signupState);
}
export {SignupL2Repository, SignupL1Repository};