import { useEffect, useState } from "react";
import Failure from "../../../Core/Failure/Failure.js";
import { useNavigate, useParams } from "react-router-dom";
import { goToSession, showWeekDay } from "../../../Core/utils/utilsFuncs.js";
import "../../../Core/styles/course.css";
import authProcces from "../../../Core/security/auth.js";
import checkPermission from "../../../Core/security/checkPermission.js";
import { teacherCourseDetailUseCase } from "../../../Domain/UseCases/teachers/courseDetailUseCase";
import Header from "../../../Core/components/Header";
import StudentModal from "./components/studentModal";
import ExamModal from "./components/examModal";
import AssignmentModal from "./components/assignmentModal";
import Sessions from "./components/sessions";

function TeacherCourseDetailView() {
  const modalTop = 2;
  const modalStartTop = -90;

  const [studentsModalTop, setStudentsModalTop] = useState(modalStartTop);
  const [createExamModalTop, setCreateExamModalTop] = useState(modalStartTop);
  const [createAssignmentModalTop, setCreateAssignmentModalTop] =
    useState(modalStartTop);
  const [has_peromission, setPromission] = useState(true);
  const navigate = useNavigate();

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
        <Header />
        <div className="course-detail-top">
          <div className="course-detail-top-item" onClick={setStudentsModal}>
            <span>students</span>
            <StudentModal
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
        <Header />
        <div>
          <p>permission denied!</p>
        </div>
      </>
    );
}

export default TeacherCourseDetailView;
