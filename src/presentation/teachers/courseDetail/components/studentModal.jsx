import { useEffect, useState } from "react";
import {
  teacherCourseDetailGerStudentsSettingUseCase,
  teacherCourseDetailSetStudentAccessUseCase,
} from "../../../../Domain/UseCases/teachers/courseDetailUseCase";
import { useParams } from "react-router-dom";
import Failure from "../../../../Core/Failure/Failure.js";

export default function StudentModal({ closeStudentsModal, studentsModalTop }) {
  const [studentEnrools, setStudentEnrools] = useState([]);
  let { courseId } = useParams();

  const fetchStudentData = async () => {
    const studentResult = await teacherCourseDetailGerStudentsSettingUseCase(
      courseId
    );
    if (!(studentResult instanceof Failure)) setStudentEnrools(studentResult);
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  const setStudentAccess = async (studentEnroll, index) => {
    let studentEnroolsC = JSON.parse(JSON.stringify(studentEnrools));
    const result = await teacherCourseDetailSetStudentAccessUseCase(courseId, {
      student_id: studentEnroll.student.user.id,
      access: 1,
    });
    if (!(result instanceof Failure)) {
      studentEnroolsC[index].is_student_access = result.access;
      setStudentEnrools(studentEnroolsC);
      console.log(studentEnroolsC);
    }
  };

  const getStudentAccess = async (studentEnroll, index) => {
    let studentEnroolsC = JSON.parse(JSON.stringify(studentEnrools));
    const result = await teacherCourseDetailSetStudentAccessUseCase(courseId, {
      student_id: studentEnroll.student.user.id,
      access: 0,
    });
    if (!(result instanceof Failure)) {
      studentEnroolsC[index].is_student_access = result.access;
      setStudentEnrools(studentEnroolsC);
      console.log(studentEnroolsC);
    }
  };

  return (
    <div
      className="course-detail-top-item-modal"
      style={{ top: `${studentsModalTop}%` }}
    >
      <div className="modal-container">
        <div className="modal-close" onClick={closeStudentsModal}></div>
        <div className="student-modal-head">
          <span>student</span>
          <span>has access</span>
          <span>set/get access</span>
        </div>
        {studentEnrools.map((studentEnroll, index) => (
          <div className="student-modal-item" key={index}>
            <div className="student-modal-item-info">
              <div>
                <span>{studentEnroll.student.user.first_name}</span>{" "}
                <span>{studentEnroll.student.user.last_name}</span>{" "}
              </div>
              <div>
                <span>{studentEnroll.student.school}</span>{" "}
                <span>{studentEnroll.student.degree}</span>{" "}
                <span>{studentEnroll.student.field}</span>
              </div>
            </div>
            <div className="student-modal-item-is_access">
              <span>
                {studentEnroll.is_student_access ? (
                  <span className="has-access-yes">yes</span>
                ) : (
                  <span className="has-access-no">no</span>
                )}
              </span>
            </div>
            <div className="student-modal-item-access_inf">
              <span>
                {studentEnroll.is_student_access ? (
                  <button
                    onClick={() => getStudentAccess(studentEnroll, index)}
                    className="student-modal-get-access"
                  >
                    get access
                  </button>
                ) : (
                  <button
                    onClick={() => setStudentAccess(studentEnroll, index)}
                    className="student-modal-set-access"
                  >
                    set access
                  </button>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
