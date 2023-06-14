import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React } from "react";
import StudentSignupView from "./presentation/students/Signup/SignupView";
import APP_ROUTES from "./Core/constants/Routs";

import EmailVerificationView from "./presentation/common/EmailVerification/EmailVerificationView";
import PasswordResetView from "./presentation/common/Password/Reset/PasswordReset";
import NoHomeView from "./presentation/common/NoHome/NoHomeView";
import SplashView from "./presentation/common/splash/splashView";
import LoginView from "./presentation/common/Login/LoginView";
import STHomeView from "./presentation/common/home/HomeView";
import StudentCourseDetailView from "./presentation/students/courseDetail/courseDetailView";
import TeacherCourseDetailView from "./presentation/teachers/courseDetail/courseDetailView";

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
        <Route path={APP_ROUTES.STUDENT_HOME} element={<STHomeView />} />
        <Route path={APP_ROUTES.TEACHER_HOME} element={<STHomeView />} />
        <Route
          path={APP_ROUTES.NO_PAGE_FOR_YOUR_ROLE}
          element={<NoHomeView />}
        />
        <Route
          path={APP_ROUTES.STUDENT_COURSE_DETAIL}
          element={<StudentCourseDetailView />}
        />
        <Route
          path={APP_ROUTES.TEACHER_COURSE_DETAIL}
          element={<TeacherCourseDetailView />}
        />
        <Route path={APP_ROUTES.CONTACT_US} element={<NoHomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
