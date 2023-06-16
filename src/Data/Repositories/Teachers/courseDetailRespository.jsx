import {
  teacherCourseDetailAPI,
  teacherCourseDetailGetStudentsAPI,
  teacherCourseDetailSetStudentAccessAPI,
} from "../../DataSource/API/teachers/CourseDetailAPI";

async function teacherCourseDetailRepository(courseId) {
  return await teacherCourseDetailAPI(courseId);
}
async function teacherCourseDetailGerStudentsSettingRepository(courseId) {
  return await teacherCourseDetailGetStudentsAPI(courseId);
}

async function teacherCourseDetailSetStudentAccessRepository(courseId, data) {
  return await teacherCourseDetailSetStudentAccessAPI(courseId, data);
}

export {
  teacherCourseDetailRepository,
  teacherCourseDetailGerStudentsSettingRepository,
  teacherCourseDetailSetStudentAccessRepository,
};
