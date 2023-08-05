import axios from "axios";
import ServerConnectionFailure from "../../../Core/Failure/ServerConnectionFailure.js";
import UnknownFailure from "../../../Core/Failure/UnknownFailure.js";
import LoginFailure from "../../../Core/Failure/loginFailure.js";
import LoginResponseModel from "../../Models/LoginResponseModel.js";
import SERVER_APIS from "../../../Core/constants/ServerAPIs.js";

async function LoginAPI(loginData) {
  try {
    console.log("LoginAPI => ");
    console.log(SERVER_APIS.LOGIN);
    console.log(loginData);
    const response = await axios.post(SERVER_APIS.LOGIN, loginData);
    return new LoginResponseModel(response.data);
  } catch (error) {
    if (error.response) {
      return new LoginFailure(error.response.data);
    } else if (error.request) {
      return new ServerConnectionFailure();
    } else {
      return new UnknownFailure();
    }
  }
}

export default LoginAPI;
