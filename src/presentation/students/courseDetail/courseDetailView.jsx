import "../../../../styles/course.css";
import StudentCourseDetailWidget from "./components/courseDetailWidget";
import {useContext} from "react";
import AuthContext from "../../../Core/contexts/root-context.jsx";
import APP_ROUTES from "../../../Core/constants/Routs.js";
import {useNavigate} from "react-router-dom";

function StudentCourseDetailView() {
  const navigate = useNavigate()
  const authContext = useContext(AuthContext);
  if (authContext.isAuthenticated !== null && authContext.isAuthenticated===false) {
    navigate(APP_ROUTES.LOGIN_USER);
  } else if (authContext.isAuthenticated === true && authContext.user.role % 2 !== 0){
    navigate(APP_ROUTES.SPLASH);
  }
  return (
      <StudentCourseDetailWidget />
  );
}

export default StudentCourseDetailView;
