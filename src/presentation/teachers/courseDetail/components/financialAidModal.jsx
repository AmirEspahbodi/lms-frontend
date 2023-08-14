import { useEffect, useState } from "react";
import {
  teacherCourseDetailGetStudentsFinancialAidsUseCase,
  teacherCourseDetailAcceptFinancialAidsUseCase
} from "../../../../Domain/UseCases/teachers/courseDetailUseCase";
import { useParams } from "react-router-dom";
import Failure from "../../../../Core/Failure/Failure.js";

export default function FinancialAidsModal({ closeStudentsModal, studentsModalTop }) {
  const [studentFinancialAids, setStudentFinancialAids] = useState([]);
  let { courseId } = useParams();
  const handleMessageChange = (value, index) => {
    studentFinancialAids[index].result = value;
    const studentFinancialAidsDeepCopy = JSON.parse(JSON.stringify(studentFinancialAids));
    setStudentFinancialAids(studentFinancialAidsDeepCopy)
  }
  const fetchFinancialAidsData = async () => {
    const financialAidResult = await teacherCourseDetailGetStudentsFinancialAidsUseCase(
      courseId
    );
    if (!(financialAidResult instanceof Failure)) {
      setStudentFinancialAids(financialAidResult)
    }
  };
  const setFinancialAid = async (financialAidId, index, is_accept) => {
    console.log(financialAidId)
    const result = await teacherCourseDetailAcceptFinancialAidsUseCase(
        {
          courseId: courseId,
          data: {
            financial_id: financialAidId,
            user_id: studentFinancialAids[index].student.user.id,
            result: studentFinancialAids[index].result,
            is_accepted: is_accept,
          }
        }
    );
    if (result instanceof Failure) alert(result.detail)
    else alert(result.message)
  }
  useEffect(() => {
    fetchFinancialAidsData();
  }, []);
  return (
    <div
      className="course-detail-top-item-modal"
      style={{ top: `${studentsModalTop}%` }}
    >
      <div className="modal-container">
        <div className="modal-close" onClick={closeStudentsModal}></div>
        <div className="student-modal-head">
        </div>
        {studentFinancialAids.map((financialAid, index) => (
          <div className="student-modal-item" key={index}>
            <div className="student-modal-item-info">
              <p>name: {financialAid.student.user.first_name+" "+financialAid.student.user.last_name}</p>
              <p>username: {financialAid.student.user.username}</p>
              <p>email: {financialAid.student.user.email}</p>
              <p>phone: {financialAid.student.user.phone_number}</p>
              <p>school: {financialAid.student.school}</p>
              <p>degree: {financialAid.student.degree}</p>
              <p>field: {financialAid.student.field}</p>
              <p>applying_reason: {financialAid.applying_reason}</p>
              <p>annual_income: {financialAid.annual_income}</p>
              <p>ability_to_pay: {financialAid.ability_to_pay}</p>
              <p>result: {financialAid.result}</p>
              <p>created_at: {financialAid.created_at}</p>
              <p style={{color:financialAid.is_accepted?'green':'red'}}>{financialAid.is_accepted? 'accepted': 'rejected'}</p>
            </div>
            <div className="student-modal-item-accept">
              <div style={
                {
                  display:"flex",
                  justifyItems:"center",
                  alignContent:"center",
                  alignItems:'center',
                  alignSelf: 'center',
                  height:"100%"
                }
              }>
                {!financialAid.reviewed &&
                  <>
                    <textarea
                        onChange={(event) => {
                          handleMessageChange(event.target.value, index)
                        }}
                        value={financialAid.result}
                        id={'message'}
                        name={'message'}
                        required={true}
                        placeholder={'message'}
                        style={
                          {
                            borderRadius: "10px",
                            marginRight:"10px",
                          }
                        }
                        rows="8">
                      </textarea>

                    <button
                      style={{color:'green', marginRight:'10px'}}
                      onClick={async () => await setFinancialAid(financialAid.id, index, true)}
                    >
                      accept
                    </button>

                    <button
                        style={{color:'red'}}
                        onClick={async () => await setFinancialAid(financialAid.id, index, false)}
                    >
                      reject
                    </button>
                  </>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
