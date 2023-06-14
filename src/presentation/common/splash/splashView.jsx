import { useNavigate } from "react-router-dom";
import APP_ROUTES from "../../../Core/constants/Routs";
import { getAuthenticatedUser } from "../../../Core/security/getAuthenticatedUser";
import { useEffect } from "react";

APP_ROUTES;

function SplashView() {
  const navigate = useNavigate();
  useEffect(() => {
    const result = getAuthenticatedUser();
    result.then((result) => {
      const { user, authenticated } = result;
      if (user || authenticated) {
        if (user.role % 2 == 0) navigate(APP_ROUTES.STUDENT_HOME);
        else if (user.role % 3 == 0) navigate(APP_ROUTES.TEACHER_HOME);
        else navigate(APP_ROUTES.NO_PAGE_FOR_YOUR_ROLE);
      } else {
        navigate(APP_ROUTES.LOGIN_USER);
      }
    });
  }, []);
  return (
    <div>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8"></div>
      </div>
    </div>
  );
}

export default SplashView;
