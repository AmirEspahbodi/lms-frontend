import { useEffect, useState } from "react";
import { teacherCourseDetailUseCase } from "../../../../Domain/UseCases/teachers/courseDetailUseCase.js";
import {useNavigate, useParams} from "react-router-dom";
import Failure from "../../../../Core/Failure/Failure.js";
import {goToSession, showWeekDay} from "../../../../Core/utils/utilsFuncs.js";

export default function Sessions() {
  const navigate = useNavigate()
  const [sessions, setSessions] = useState([]);
  const { courseId } = useParams();

  const fetchData = async () => {
    const result = await teacherCourseDetailUseCase(courseId);
    if (!(result instanceof Failure)) {
      setSessions(result.sessions);
      console.log("here in setSessions(result);");
      console.log(sessions);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="sessions">
      {sessions.map((session) => {
        return (
          <div key={session.id}>
            <div className="session">
              <div className="session-name">
                <p
                    onClick={(e) => goToSession(e, session?.id, navigate)}
                    style={{cursor:'pointer'}}
                >session {session.session_number}</p>
              </div>
              <div className="session-time">
                <span>{session.date}</span>
                {", "}
                <span>{session.time_slot.room_number.room_title}</span> {", "}
                <span>{showWeekDay(session.time_slot.day)}</span> {", "}
                <span>{session.time_slot.start}</span> {", "}
                <span>{session.time_slot.end}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
