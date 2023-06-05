import { useNavigate } from "react-router-dom";
import Header from "../../Core/components/Header";
import LoginWidget from "./components/LoginWidget";
import APP_ROUTES from "../../Core/constants/Routs";
import useUser from "../../Core/customHooks";

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
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl={APP_ROUTES.STUDENT_SIGNUP}
      />
      <LoginWidget />
    </>
  );
}

export default LoginPage;
