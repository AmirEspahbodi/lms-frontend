import studentHomeAPI from "../../DataSource/API/common/HomeAPI.js";

export default async function StudentHomeRepository() {
  return await studentHomeAPI();
}
