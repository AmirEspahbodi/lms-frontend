import CommonFailure from "../../../../Core/Failure/CommonFailures";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure";
import SERVER_APIS from "../../../../Core/constants/ServerAPIs";
import { postRequest } from "../../../../Core/security/sendRequest";

export default async function LogOutAPI() {
  try {
    const response = await postRequest({ url: SERVER_APIS.LOGOUT });
    return response;
  } catch (error) {
    if (error.response) {
      return new CommonFailure(error.response.data);
    } else if (error.request) {
      return new ServerConnectionFailure();
    } else {
      console.log(error);
      return new UnknownFailure();
    }
  }
}
