import studentHomeAPI from "../../DataSource/API/students/HomeAPI";

export default async function StudentHomeRepository() {
  return await studentHomeAPI();
}
