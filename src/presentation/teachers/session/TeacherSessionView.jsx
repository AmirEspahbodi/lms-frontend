import {useContext, useEffect, useState} from "react";
import TeacherSessionUseCase from "../../../Domain/UseCases/teachers/sessionUseCase.js";
import Failure from "../../../Core/Failure/Failure.js";
import {goToSession, showWeekDay} from "../../../Core/utils/utilsFuncs.js";
import {useNavigate, useParams} from "react-router-dom";
import AuthContext from "../../../Core/contexts/root-context.jsx";
import APP_ROUTES from "../../../Core/constants/Routs.js";
import Exams from "./components/Exams.jsx";
import Assignments from "./components/Assignments.jsx";
import ExamModal from "./components/examModal.jsx";
import AssignmentModal from "./components/assignmentModal.jsx";

export default function TeacherSessionView (props){
    const navigate = useNavigate()
    const authContext = useContext(AuthContext);
    const modalTop = 2;
    const modalStartTop = -90;
    const [createExamModalTop, setCreateExamModalTop] = useState(modalStartTop);
    const [createAssignmentModalTop, setCreateAssignmentModalTop] =
        useState(modalStartTop);
    if (authContext.isAuthenticated !== null && authContext.isAuthenticated===false) {
        navigate(APP_ROUTES.LOGIN_USER);
    } else if (authContext.isAuthenticated === true && authContext.user.role % 3 !== 0){
        navigate(APP_ROUTES.SPLASH);
    }

    const [session, setSession] = useState([])
    const [dataFetched, setDataFetched] = useState(false)
    const {sessionId} = useParams()
    const fetchSessionData = async () => {
        const result = await TeacherSessionUseCase({sessionId:sessionId})
        if (result instanceof Failure) {
            alert(result.detail)
        } else {
            console.log("in TeacherSessionView")
            console.log(result)
            setSession(result)
            setDataFetched(true)
        }
    }
    useEffect(
        ()=>{
            fetchSessionData()
        },
        [])
    const setCreateExamModal = () =>
        createExamModalTop !== modalTop ? setCreateExamModalTop(modalTop) : null;
    const setCreateAssignmentModal = () =>
        createAssignmentModalTop !== modalTop
            ? setCreateAssignmentModalTop(modalTop)
            : null;
    const closeCreateExamModal = () => setCreateExamModalTop(modalStartTop);
    const closeCreateAssignmentModal = () =>
        setCreateAssignmentModalTop(modalStartTop);
    if (dataFetched)
        return <div key={session.id}>
            <div className="course-detail-top">
                <div onClick={setCreateExamModal} className="course-detail-top-item">
                    <span>create exam</span>
                    <ExamModal
                        closeCreateExamModal={closeCreateExamModal}
                        createExamModalTop={createExamModalTop}
                        fetchSessionData={fetchSessionData}
                        sessionId={sessionId}
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
                        fetchSessionData={fetchSessionData}
                        sessionId={sessionId}
                    />
                </div>
            </div>
            <div className="session">
                <p
                    onClick={(e) => goToSession(e, session?.id, navigate)}
                    style={{cursor:'pointer'}}
                >session {session.session_number}</p>
                <div className="session-time">
                    <span>{session.date}</span>
                    {", "}
                    <span>{session.time_slot.room_number.room_title}</span> {", "}
                    <span>{showWeekDay(session.time_slot.day)}</span> {", "}
                    <span>{session.time_slot.start}</span> {", "}
                    <span>{session.time_slot.end}</span>
                </div>
                <div>
                    {session.description}
                </div>
            </div>
            <div className="session"><Exams exams={session.exams}/></div>
            <div className="session"><Assignments assignments={session.assignments}/></div>
        </div>
    return <>loading . . . </>
}