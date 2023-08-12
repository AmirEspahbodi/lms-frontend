import {useContext, useEffect, useState} from "react";
import AuthHeader from "../../../Core/components/AuthHeader.jsx";
import APP_ROUTES from "../../../Core/constants/Routs.js";
import SignupL1 from "./components/SignupL1Widget.jsx";
import SignupL2 from "./components/SignupL2Widget.jsx";
import {useNavigate} from "react-router-dom";
import AuthContext from "../../../Core/contexts/root-context.jsx";

export default function SignupUserPage() {
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    useEffect(() => {
        if (authContext.isAuthenticated && authContext.user) {
            if (authContext.user.role % 2 == 0) navigate(APP_ROUTES.STUDENT_HOME);
            else if (authContext.user.role % 3 == 0) navigate(APP_ROUTES.TEACHER_HOME);
            else navigate(APP_ROUTES.NO_PAGE_FOR_YOUR_ROLE);
        }
    }, []);

    const [signupL1Data, setSignupL1Data] = useState({
        userId:0,
        level:1,
    })

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
            {
                signupL1Data.level===1
                    ? <SignupL1 setSignupL1Data={setSignupL1Data}/>
                    : <SignupL2 signupL1Data={signupL1Data} setSignupL1Data={setSignupL1Data}/>
            }
        </div>
      </div>
    </>
  );
}
