import CommonFailure from "../../../../Core/Failure/CommonFailures";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure";
import SERVER_APIS from "../../../../Core/constants/ServerAPIs";
import { getRequest } from "../../../../Core/security/sendRequest";
import StudentCourseDetailModel from "../../../Models/students/courseDetailModel";

export default async function studentCourseDetailAPI(courseId) {
  try {
    const response = await getRequest({
      url: SERVER_APIS.STUDENT_COURSE_DETAIL(courseId),
    });
    return new StudentCourseDetailModel(response.data);
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
