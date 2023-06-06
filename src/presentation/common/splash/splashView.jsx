import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import APP_ROUTES from "../../../Core/constants/Routs";
import useUser from "../../../Core/customHooks";
APP_ROUTES;

function SplashView() {
  const navigate = useNavigate();
  const { user, authenticated } = useUser();

  useEffect(() => {
    if (user || authenticated) {
      if (user.role % 2 == 0) navigate(APP_ROUTES.STUDENT_HOME);
      else if (user.role % 3 == 0) navigate(APP_ROUTES.TEACHER_HOME);
      else navigate(APP_ROUTES.NO_PAGE_FOR_YOUR_ROLE);
    } else {
      navigate(APP_ROUTES.LOGIN_USER);
    }
  }, []);
  return <div></div>;
}

export default SplashView;
