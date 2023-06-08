import { useNavigate } from "react-router-dom";
import AuthHeader from "../../../Core/components/AuthHeader";
import LoginWidget from "./components/LoginWidget";
import APP_ROUTES from "../../../Core/constants/Routs";
import useUser from "../../../Core/customHooks";

function LoginPage() {
  const navigate = useNavigate();
  const { user, authenticated } = useUser();
  if (user || authenticated) {
    if (user.role % 2 == 0) navigate(APP_ROUTES.STUDENT_HOME);
    else if (user.role % 3 == 0) navigate(APP_ROUTES.TEACHER_HOME);
    else navigate(APP_ROUTES.NO_PAGE_FOR_YOUR_ROLE);
  }
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <AuthHeader
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl={APP_ROUTES.STUDENT_SIGNUP}
          />
          <LoginWidget />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
