import {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "../../../../styles/course.css";
import authProcces from "../../../Core/security/auth.js";
import checkPermission from "../../../Core/security/checkPermission.js";
import ExamModal from "./components/examModal";
import AssignmentModal from "./components/assignmentModal";
import Sessions from "./components/sessions";
import FinancialAidsModal from "./components/financialAidModal.jsx";
import AuthContext from "../../../Core/contexts/root-context.jsx";
import APP_ROUTES from "../../../Core/constants/Routs.js";

function TeacherCourseDetailView() {
  const navigate = useNavigate()
  const authContext = useContext(AuthContext);
  if (authContext.isAuthenticated !== null && authContext.isAuthenticated===false) {
    navigate(APP_ROUTES.LOGIN_USER);
  } else if (authContext.isAuthenticated === true && authContext.user.role % 3 !== 0){
    navigate(APP_ROUTES.SPLASH);
  }

  const modalTop = 2;
  const modalStartTop = -90;

  const [studentsModalTop, setStudentsModalTop] = useState(modalStartTop);
  const [createExamModalTop, setCreateExamModalTop] = useState(modalStartTop);
  const [createAssignmentModalTop, setCreateAssignmentModalTop] =
    useState(modalStartTop);
  const [has_peromission, setPromission] = useState(true);

  useEffect(() => {
    authProcces(navigate);
    checkPermission(setPromission);
  }, []);

  const setStudentsModal = () =>
    studentsModalTop != modalTop ? setStudentsModalTop(modalTop) : null;
  const setCreateExamModal = () =>
    createExamModalTop != modalTop ? setCreateExamModalTop(modalTop) : null;
  const setCreateAssignmentModal = () =>
    createAssignmentModalTop != modalTop
      ? setCreateAssignmentModalTop(modalTop)
      : null;
  const closeStudentsModal = () => setStudentsModalTop(modalStartTop);
  const closeCreateExamModal = () => setCreateExamModalTop(modalStartTop);
  const closeCreateAssignmentModal = () =>
    setCreateAssignmentModalTop(modalStartTop);
  if (has_peromission)
    return (
      <>
        <div className="course-detail-top">
          <div className="course-detail-top-item" onClick={setStudentsModal}>
            <span>financial aids</span>
            <FinancialAidsModal
              closeStudentsModal={closeStudentsModal}
              studentsModalTop={studentsModalTop}
            />
          </div>
          <div onClick={setCreateExamModal} className="course-detail-top-item">
            <span>create exam</span>
            <ExamModal
              closeCreateExamModal={closeCreateExamModal}
              createExamModalTop={createExamModalTop}
            />
          </div>
          <div
            onClick={setCreateAssignmentModal}
            className="course-detail-top-item"
          >
            <span>create assignment</span>
            <AssignmentModal
              closeCreateAssignmentModal={closeCreateAssignmentModal}
              createAssignmentModalTop={createAssignmentModalTop}
            />
          </div>
        </div>
        <Sessions />
      </>
    );
  else
    return (
      <>
        <div>
          <p>permission denied!</p>
        </div>
      </>
    );
}

export default TeacherCourseDetailView;
