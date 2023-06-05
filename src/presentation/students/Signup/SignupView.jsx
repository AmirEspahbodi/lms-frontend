import Header from "../../../Core/components/Header";
import APP_ROUTES from "../../../Core/constants/Routs";
import SignupWidget from "./components/SignupWidget";

export default function SignupPage() {
  return (
    <>
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl={APP_ROUTES.LOGIN_USER}
      />
      <SignupWidget />
    </>
  );
}
