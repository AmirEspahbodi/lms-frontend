import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentSignupView from "./presentation/students/Signup/SignupView";
import LoginView from "./presentation/Login/LoginView";
import "./Core/styles/App.css";

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          <Routes>
            <Route path="/login/" element={<LoginView />} />
            <Route path="/student/signup/" element={<StudentSignupView />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
