import Header from "../../Core/components/Header";
import SignupUser from "../../Domain/UseCases/Students/SignupUser";

export default function SignupPage() {
  return (
    <>
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login/"
      />
      <SignupUser />
    </>
  );
}
