import studentCourseDetailAPI from "../../DataSource/API/students/CourseDetailAPI";

export default async function studentCourseDetailRepository(courseId) {
  return await studentCourseDetailAPI(courseId);
}
