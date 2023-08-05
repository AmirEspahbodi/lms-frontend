import studentCourseDetailRepository from "../../../Data/Repositories/Students/courseDetailRespository.js";

export default async function studentCourseDetailUseCase(courseId) {
  return await studentCourseDetailRepository(courseId);
}
