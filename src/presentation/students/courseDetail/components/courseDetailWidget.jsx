import { useEffect, useState } from "react";
import courseDetailUseCase from "../../../../Domain/UseCases/Students/courseDetailUseCase.js";
import Failure from "../../../../Core/Failure/Failure.js";
import { useNavigate, useParams } from "react-router-dom";
import { goToSession, showWeekDay } from "../../../../Core/utils/utilsFuncs.js";
import checkAuth from "../../../../Core/security/checkAuth.js";
import checkPermission from "../../../../Core/security/checkPermission.js";

export default function StudentCourseDetailWidget() {
  const [sessions, setSessions] = useState([]);
  const [has_peromission, setPromission] = useState(true);
  let { courseId } = useParams();
  const navigate = useNavigate();
  const fetchData = async () => {
    const result = await courseDetailUseCase(courseId);
    if (result instanceof Failure) {
    } else {
      setSessions(result.sessions);
    }
  };
  useEffect(() => {
    checkAuth(navigate);
    checkPermission(setPromission);
    fetchData();
  }, []);

  if (has_peromission)
    return (
      <div>
        <div className="sessions">
          {sessions.map((session) => {
            return (
              <div
                onClick={(e) => goToSession(e, session?.id, navigate)}
                key={session.id}
              >
                <div className="session">
                  <div className="session-name">
                    <p>session {session.session_number}</p>
                  </div>
                  <div className="session-time">
                    <span>{session.date}</span>
                    {", "}
                    <span>{session.time_slot.room_number.room_title}</span>{" "}
                    {", "}
                    <span>{showWeekDay(session.time_slot.day)}</span> {", "}
                    <span>{session.time_slot.start}</span> {", "}
                    <span>{session.time_slot.end}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  else
    return (
      <div>
        <p>permission denied!</p>
      </div>
    );
}
