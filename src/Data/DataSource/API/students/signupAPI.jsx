import axios from "axios";
import URLS from "../../../../Core/constants/URLS";
import SignUpFailure from "../../../../Core/Failure/signupFailure";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure";
import StudentSignUp from "../../../../Domain/Entities/students/signupEntity";

async function StudentSignupAPI(signupData) {
  try {
    const response = await axios.post(URLS.STUDENT_SIGNUP, signupData);
    return new StudentSignUp(response.data.detail);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      return new SignUpFailure(error.response.data);
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

export default StudentSignupAPI;
