import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import APP_ROUTES from "./constants/Routs.js";
import { getAuthenticatedUser } from "./security/getAuthenticatedUser.js";

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

export default useUser;
