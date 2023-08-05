import { useNavigate } from "react-router-dom";
import APP_ROUTES from "../constants/Routs.js";
import { getAuthenticatedUser } from "./getAuthenticatedUser.js";

const checkAuth = async (navigate) => {
  const { authenticated, user } = await getAuthenticatedUser();
  if (!authenticated || user == null) {
    sessionStorage.clear();
    navigate(APP_ROUTES.LOGIN_USER);
  }
};

export default checkAuth;
