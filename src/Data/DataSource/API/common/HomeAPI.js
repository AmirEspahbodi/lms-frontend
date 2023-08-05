import CommonFailure from "../../../../Core/Failure/CommonFailures.js";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure.js";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure.js";
import SERVER_APIS from "../../../../Core/constants/ServerAPIs.js";
import { getRequest } from "../../../../Core/security/sendRequest.js";
import StudentHomeModel from "../../../Models/students/StudentHome.js";

export default async function StudentHomeAPI() {
  try {
    const response = await getRequest({ url: SERVER_APIS.STUDENT_HOME });
    return new StudentHomeModel(response.data);
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
