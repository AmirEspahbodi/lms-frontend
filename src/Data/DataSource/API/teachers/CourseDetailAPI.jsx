import CommonFailure from "../../../../Core/Failure/CommonFailures";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure";
import SERVER_APIS from "../../../../Core/constants/ServerAPIs";
import { getRequest, putRequest } from "../../../../Core/security/sendRequest";
import {
  TeacherSetStudentResponseModel,
  TeacherCourseDetailModel,
} from "../../../Models/teachers/courseDetailModel";

async function teacherCourseDetailAPI(courseId) {
  try {
    const response = await getRequest({
      url: SERVER_APIS.TEACHER_COURSE_DETAIL(courseId),
    });
    return new TeacherCourseDetailModel(response.data);
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

async function teacherCourseDetailGetStudentsAPI(courseId) {
  try {
    const response = await getRequest({
      url: SERVER_APIS.TEACHER_COURSE_GET_STUDENTS(courseId),
    });
    return response.data;
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

async function teacherCourseDetailSetStudentAccessAPI(courseId, data) {
  try {
    const response = await putRequest({
      url: SERVER_APIS.TEACHER_SET_STUDENT_ACCESS(courseId),
      data: data,
    });

    return new TeacherSetStudentResponseModel(response.data);
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

export {
  teacherCourseDetailAPI,
  teacherCourseDetailGetStudentsAPI,
  teacherCourseDetailSetStudentAccessAPI,
};
