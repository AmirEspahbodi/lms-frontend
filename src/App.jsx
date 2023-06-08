import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React } from "react";
import StudentSignupView from "./presentation/students/Signup/SignupView";
import APP_ROUTES from "./Core/constants/Routs";
import StudentHomeView from "./presentation/students/home/StudentHomeView";
import TeacherHomeView from "./presentation/teachers/home/TeeacherHomeView";

import EmailVerificationView from "./presentation/common/EmailVerification/EmailVerificationView";
import PasswordResetView from "./presentation/common/Password/Reset/PasswordReset";
import NoHomeView from "./presentation/common/NoHome/NoHomeView";
import SplashView from "./presentation/common/splash/splashView";
import LoginView from "./presentation/common/Login/LoginView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.SPLASH} element={<SplashView />} />
        <Route path={APP_ROUTES.LOGIN_USER} element={<LoginView />} />
        <Route
          path={APP_ROUTES.STUDENT_SIGNUP}
          element={<StudentSignupView />}
        />
        <Route
          path={APP_ROUTES.PASSWORD_RESET}
          element={<PasswordResetView />}
        />
        <Route
          path={APP_ROUTES.EMAIL_VERIFICATION}
          element={<EmailVerificationView />}
        />
        <Route path={APP_ROUTES.STUDENT_HOME} element={<StudentHomeView />} />
        <Route path={APP_ROUTES.TEACHER_HOME} element={<TeacherHomeView />} />

        <Route
          path={APP_ROUTES.NO_PAGE_FOR_YOUR_ROLE}
          element={<NoHomeView />}
        />
        <Route path={APP_ROUTES.CONTACT_US} element={<NoHomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
