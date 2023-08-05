import studentCourseDetailAPI from "../../DataSource/API/students/CourseDetailAPI.js";

export default async function studentCourseDetailRepository(courseId) {
  return await studentCourseDetailAPI(courseId);
}
