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

import "./Core/styles/App.css";

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
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
            <Route
              path={APP_ROUTES.STUDENT_HOME}
              element={<StudentHomeView />}
            />
            <Route
              path={APP_ROUTES.TEACHER_HOME}
              element={<TeacherHomeView />}
            />
            <Route
              path={APP_ROUTES.NO_PAGE_FOR_YOUR_ROLE}
              element={<NoHomeView />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
