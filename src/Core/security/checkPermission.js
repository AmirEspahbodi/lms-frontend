import { getUser } from "./auth.js";

async function checkPermission(setPermission) {
  const user = getUser();
  console.log(user)
  const role = window.location.pathname.split("/").includes("student")
    ? 2
    : window.location.pathname.split("/").includes("teacher")
    ? 3
    : NaN;
  if (user == null) return;
  if (user.role % role == 0) return;
  setPermission(false);
}

export default checkPermission;
