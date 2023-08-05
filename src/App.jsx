import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useEffect} from "react";
import APP_ROUTES from "./Core/constants/Routs.js";

import SignupUserView from "./presentation/common/Signup/SignupView";
import EmailVerificationView from "./presentation/common/EmailVerification/EmailVerificationView";
import PasswordResetView from "./presentation/common/Password/Reset/PasswordReset";
import NoHomeView from "./presentation/common/NoHome/NoHomeView";
import SplashView from "./presentation/common/splash/splashView";
import LoginView from "./presentation/common/Login/LoginView";
import StudentCourseDetailView from "./presentation/students/courseDetail/courseDetailView";
import TeacherCourseDetailView from "./presentation/teachers/courseDetail/courseDetailView";
import StudentHomeView from "./presentation/students/home/HomeView";
import TeacherHomeView from "./presentation/teachers/home/HomeView";
import RootLayout from "./Core/components/RootLayout.jsx";
import {getUser} from "./Core/security/getAuthenticatedUser.js";
import Header from "./Core/components/Header.jsx";

function App() {
  useEffect(() => {
    getUser();
  }, [])
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={APP_ROUTES.SPLASH} element={<SplashView />} />
          <Route path={APP_ROUTES.LOGIN_USER} element={<LoginView />} />
          <Route
              path={APP_ROUTES.SIGNUP_USER}
              element={<SignupUserView />}
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
