import teacherCourseDetailRepository from "../../../Data/Repositories/Students/courseDetailRespository";

export default async function teacherCourseDetailUseCase(courseId) {
  return await teacherCourseDetailRepository(courseId);
}
