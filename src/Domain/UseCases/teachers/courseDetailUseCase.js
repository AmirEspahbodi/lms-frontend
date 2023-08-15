import {
  teacherCourseDetailRepository,
  teacherCourseDetailGetStudentsFinancialAidsRepository,
  teacherCourseDetailSetStudentAccessRepository,
  teacherCourseDetailAcceptFinancialAidsRepository
} from "../../../Data/Repositories/Teachers/courseDetailRespository.js";

async function teacherCourseDetailUseCase(courseId) {
  return await teacherCourseDetailRepository(courseId);
}

async function teacherCourseDetailGetStudentsFinancialAidsUseCase(courseId) {
  return await teacherCourseDetailGetStudentsFinancialAidsRepository(courseId);
}

async function teacherCourseDetailAcceptFinancialAidsUseCase(props) {
  return await teacherCourseDetailAcceptFinancialAidsRepository(props);
}

async function teacherCourseDetailSetStudentAccessUseCase(courseId, data) {
  return await teacherCourseDetailSetStudentAccessRepository(courseId, data);
}

export {
  teacherCourseDetailUseCase,
  teacherCourseDetailGetStudentsFinancialAidsUseCase,
  teacherCourseDetailSetStudentAccessUseCase,
  teacherCourseDetailAcceptFinancialAidsUseCase
};
