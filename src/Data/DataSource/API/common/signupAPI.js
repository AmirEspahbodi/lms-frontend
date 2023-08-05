import axios from "axios";
import {SignUpL2Success, SignUpL1Success} from "../../../../Domain/Entities/signupEntity.js";
import {SignUpL2Failure, SignUpL1Failure} from "../../../../Core/Failure/signupFailure.js";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure.js";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure.js";
import SERVER_APIS from "../../../../Core/constants/ServerAPIs.js";

async function StudentL1SignupAPI(signupData) {
  try {
    console.log("before send data")
    console.log(signupData)
    const response = await axios.post(SERVER_APIS.SIGNUPL1, signupData);
    return new SignUpL1Success(response.data);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return new SignUpL1Failure(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js

      return new ServerConnectionFailure();
    } else {
      // Something happened in setting up the request that triggered an Error

      console.log("Error", error.message);
      return new UnknownFailure();
    }
  }
}


async function StudentL2SignupAPI(signupData) {
  try {
    const response = await axios.post(SERVER_APIS.SIGNUPL2, signupData);
    return new SignUpL2Success(response.data);
  } catch (error) {
    if (error.response) {
      return new SignUpL2Failure(error.response.data);
    } else if (error.request) {
      return new ServerConnectionFailure();
    } else {
      return new UnknownFailure();
    }
  }
}

export {StudentL2SignupAPI, StudentL1SignupAPI};
