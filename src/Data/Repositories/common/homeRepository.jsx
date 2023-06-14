import studentHomeAPI from "../../DataSource/API/common/studentHomeAPI";

export default async function STHomeRepository() {
  return await studentHomeAPI();
}
