import TeacherHomeAPI from "../../DataSource/API/teachers/HomeAPI";

export default async function TeacherHomeRepository() {
  return await TeacherHomeAPI();
}
