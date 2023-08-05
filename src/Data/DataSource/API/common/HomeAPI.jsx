import CommonFailure from "../../../../Core/Failure/CommonFailures.jsx";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure.jsx";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure.jsx";
import SERVER_APIS from "../../../../Core/constants/ServerAPIs.jsx";
import { getRequest } from "../../../../Core/security/sendRequest.jsx";
import StudentHomeModel from "../../../Models/students/StudentHome.jsx";

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
