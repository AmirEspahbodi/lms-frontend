import studentCourseDetailRepository from "../../../Data/Repositories/Students/courseDetailRespository";

export default async function studentCourseDetailUseCase(courseId) {
  return await studentCourseDetailRepository(courseId);
}
