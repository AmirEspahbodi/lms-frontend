import CommonFailure from "../../../../Core/Failure/CommonFailures.js";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure.js";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure.js";
import SERVER_APIS from "../../../../Core/constants/ServerAPIs.js";
import {getRequest, postRequest, putRequest} from "../../../../Core/security/sendRequest.js";
import {
  TeacherSetStudentResponseModel,
  TeacherCourseDetailModel,
} from "../../../Models/teachers/courseDetailModel.js";

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

async function teacherCourseDetailGetStudentsFinancialAidsAPI(courseId) {
  try {
    const response = await getRequest({
      url: SERVER_APIS.TEACHER_COURSE_GET_FINANCIAL_AIDS(courseId),
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


async function teacherCourseDetailAcceptFinancialAidsAPI(props) {
  try {
    const response = await postRequest({
      url: SERVER_APIS.TEACHER_COURSE_GET_FINANCIAL_AIDS(props.courseId),
      data: props.data,
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
  teacherCourseDetailGetStudentsFinancialAidsAPI,
  teacherCourseDetailSetStudentAccessAPI,
  teacherCourseDetailAcceptFinancialAidsAPI
};
