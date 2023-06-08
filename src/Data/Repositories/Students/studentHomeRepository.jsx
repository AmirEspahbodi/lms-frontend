import studentHomeAPI from "../../DataSource/API/students/studentHomeAPI";

export default async function StudentHomeRepository() {
  return await studentHomeAPI();
}
