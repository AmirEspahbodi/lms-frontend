import axios from "axios";
import ServerConnectionFailure from "../../../Core/Failure/ServerConnectionFailure";
import UnknownFailure from "../../../Core/Failure/UnknownFailure";
import LoginFailure from "../../../Core/Failure/loginFailure";
import LoginResponseModel from "../../Models/LoginResponseModel";
import SERVER_APIS from "../../../Core/constants/ServerAPIs";

async function LoginAPI(loginData) {
  try {
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
