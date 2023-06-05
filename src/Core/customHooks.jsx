import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import APP_ROUTES from "./constants/Routs";
import getAuthenticatedUser from "./getAuthenticatedUser";

export function useUser() {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserDetails() {
      const { authenticated, user } = await getAuthenticatedUser();
      if (!authenticated) {
        navigate(APP_ROUTES.SIGN_IN);
        return;
      }
      setUser(user);
      setAuthenticated(authenticated);
    }
    getUserDetails();
  }, []);

  return { user, authenticated };
}

export function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}

export default { useUser, useToken };
