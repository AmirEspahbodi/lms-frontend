import TeacherHomeAPI from "../../DataSource/API/teachers/HomeAPI.js";

export default async function TeacherHomeRepository() {
  return await TeacherHomeAPI();
}
