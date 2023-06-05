import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import APP_ROUTES from "../../Core/constants/Routs";
APP_ROUTES;

function SplashView() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("check auth token exist in session");
    navigate(APP_ROUTES.LOGIN_USER);
  }, []);
  return <div></div>;
}

export default SplashView;
