import Failure from "../../../Core/Failure/Failure";
import StudentHomeRepository from "../../../Data/Repositories/Students/studentHomeRepository";

export default async function StudentHomeUseCase() {
  const result = await StudentHomeRepository();
  if (result instanceof Failure) return result;
  let exams = [];
  let assignments = [];
  for (let session of result.sessions) {
    if (session.exams.length !== 0) {
      for (let exam of session.exams) {
        exams.push(exam);
      }
    }
    if (session.assignments.length !== 0) {
      for (let assignment of session.assignments) {
        assignments.push(assignment);
      }
    }
  }
  return {
    courses: result.courses,
    exams: exams,
    assignments: assignments,
  };
}
