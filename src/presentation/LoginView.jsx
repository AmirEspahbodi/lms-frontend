import Header from "../Core/components/Header";
import LoginUser from "../Domain/UseCases/LoginUser";

function LoginPage() {
  return (
    <>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/student/signup"
      />
      <LoginUser />
    </>
  );
}

export default LoginPage;
