import { useNavigate } from "react-router-dom";
import APP_ROUTES from "../constants/Routs";
import { getAuthenticatedUser } from "./getAuthenticatedUser";

const checkAuth = async (navigate) => {
  const { authenticated, user } = await getAuthenticatedUser();
  if (!authenticated || user == null) {
    sessionStorage.clear();
    navigate(APP_ROUTES.LOGIN_USER);
  }
};

export default checkAuth;
