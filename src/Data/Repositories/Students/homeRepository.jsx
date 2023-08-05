import studentHomeAPI from "../../DataSource/API/common/HomeAPI.jsx";

export default async function StudentHomeRepository() {
  return await studentHomeAPI();
}
