import {
  teacherCourseDetailAPI,
  teacherCourseDetailGetStudentsFinancialAidsAPI,
  teacherCourseDetailSetStudentAccessAPI,
  teacherCourseDetailAcceptFinancialAidsAPI
} from "../../DataSource/API/teachers/CourseDetailAPI.js";

async function teacherCourseDetailRepository(courseId) {
  return await teacherCourseDetailAPI(courseId);
}
async function teacherCourseDetailGetStudentsFinancialAidsRepository(courseId) {
  return await teacherCourseDetailGetStudentsFinancialAidsAPI(courseId);
}

async function teacherCourseDetailAcceptFinancialAidsRepository(props) {
  return await teacherCourseDetailAcceptFinancialAidsAPI(props);
}

async function teacherCourseDetailSetStudentAccessRepository(courseId, data) {
  return await teacherCourseDetailSetStudentAccessAPI(courseId, data);
}

export {
  teacherCourseDetailRepository,
  teacherCourseDetailGetStudentsFinancialAidsRepository,
  teacherCourseDetailSetStudentAccessRepository,
  teacherCourseDetailAcceptFinancialAidsRepository,
};
