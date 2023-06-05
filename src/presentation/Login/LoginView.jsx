import Header from "../../Core/components/Header";
import LoginWidget from "./components/LoginWidget";
import APP_ROUTES from "../../Core/constants/Routs";

function LoginPage() {
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
