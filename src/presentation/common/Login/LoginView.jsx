import { useNavigate } from "react-router-dom";
import AuthHeader from "../../../Core/components/AuthHeader";
import LoginWidget from "./components/LoginWidget";
import APP_ROUTES from "../../../Core/constants/Routs.js";
import useUser from "../../../Core/customHooks.js";
import {getAuthenticatedUser} from "../../../Core/security/getAuthenticatedUser.js";

function LoginPage() {
  const navigate = useNavigate();
  const result = getAuthenticatedUser();
  result.then((result) => {
    const {authenticated, user}  = result;
    if (authenticated) {
      if (user.role == 2)
        null
      else if (user.role == 3)
        null
      else null
    }
  })
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <AuthHeader
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl={APP_ROUTES.SIGNUP_USER}
          />
          <LoginWidget />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
