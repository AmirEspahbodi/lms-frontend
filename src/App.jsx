import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import StudentSignupView from "./presentation/students/Signup/SignupView";
import LoginView from "./presentation/Login/LoginView";
import PasswordResetView from "./presentation/Password/Reset/PasswordReset";
import EmailVerificationView from "./presentation/EmailVerification/EmailVerificationView";
import APP_ROUTES from "./Core/constants/Routs";
import Dashboard from "./presentation/Dashboard/Dashboard";
import SplashView from "./presentation/splash/splashView";
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
            <Route path={APP_ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={APP_ROUTES.STUDENT_HOME} element={<Dashboard />} />
            <Route path={APP_ROUTES.TEACHER_HOME} element={<Dashboard />} />
            <Route
              path={APP_ROUTES.NO_PAGE_FOR_YOUR_ROLE}
              element={<Dashboard />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
