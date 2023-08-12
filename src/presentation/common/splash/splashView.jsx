import { useNavigate } from "react-router-dom";
import APP_ROUTES from "../../../Core/constants/Routs.js";
import {  } from "../../../Core/security/auth.js";
import {useContext, useEffect} from "react";
import AuthContext from "../../../Core/contexts/root-context.jsx";


function SplashView() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  console.log("in SplashView")
  const user = authContext.user;
  if (authContext.isAuthenticated===false) {
    navigate(APP_ROUTES.LOGIN_USER);
  }
  else if (user.user_id!=null) {
    if (user.role % 2 == 0) navigate(APP_ROUTES.STUDENT_HOME);
    else if (user.role % 3 == 0) navigate(APP_ROUTES.TEACHER_HOME);
    else navigate(APP_ROUTES.NO_PAGE_FOR_YOUR_ROLE);
  }
  useEffect(() => {
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
