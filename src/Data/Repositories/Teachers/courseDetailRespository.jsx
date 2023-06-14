import teacherCourseDetailAPI from "../../DataSource/API/teachers/CourseDetailAPI";

export default async function teacherCourseDetailRepository(courseId) {
  return await teacherCourseDetailAPI(courseId);
}
