import { getUser } from "./getAuthenticatedUser";

async function checkPermission(setPromission) {
  const user = getUser();
  const role = window.location.pathname.split("/").includes("student")
    ? 2
    : window.location.pathname.split("/").includes("teacher")
    ? 3
    : NaN;
  if (user == null) return;
  if (user.role == role) return;
  setPromission(false);
}

export default checkPermission;
