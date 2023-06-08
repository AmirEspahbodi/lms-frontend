import AuthHeader from "../../../Core/components/AuthHeader";
import APP_ROUTES from "../../../Core/constants/Routs";
import SignupWidget from "./components/SignupWidget";

export default function SignupPage() {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <AuthHeader
            heading="Signup to create an account"
            paragraph="Already have an account? "
            linkName="Login"
            linkUrl={APP_ROUTES.LOGIN_USER}
          />
          <SignupWidget />
        </div>
      </div>
    </>
  );
}
