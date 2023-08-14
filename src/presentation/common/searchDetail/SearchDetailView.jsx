import {useContext, useEffect, useState} from "react";
import Failure from "../../../Core/Failure/Failure.js";
import {useNavigate, useParams} from "react-router-dom";
import SearchDetailUseCase from "../../../Domain/UseCases/common/SearchDetailUseCase.js";
import {showSemester} from "../../../Core/utils/utilsFuncs.js";
import Modal from "../../../Core/components/Modal.jsx";
import FinancialAid from "./components/FinancialAid.jsx";
import AuthContext from "../../../Core/contexts/root-context.jsx";
import APP_ROUTES from "../../../Core/constants/Routs.js";

export default function SearchDetailView(props) {
    const navigate = useNavigate()
    const authContext = useContext(AuthContext);
    if (authContext.isAuthenticated === false) {
        navigate(APP_ROUTES.SEARCH);
    }
    const [courseState, setCourseState] = useState({});
    let [fetched, setFetched] = useState(false);
    const [modalTop, setModalTop] = useState(-100)
    const [financialAidSend, setFinancialAidSend] = useState(false)
    const { courseId } = useParams();
    const fetchCourse = async () => {
        const result = await SearchDetailUseCase({course_id:courseId});
        if (result instanceof Failure){
            console.log(result)
        } else {
            console.log(courseState)
            setCourseState(result);
            setFetched(true)
        }
    }
    useEffect(
        ()=>{
            if (authContext.isAuthenticated === false) {
                navigate(APP_ROUTES.SEARCH);
            }
            fetchCourse();
        },
        []
    )
    const showName = (first_name, last_name, username, last) => first_name===''||null||undefined && last_name===''||null||undefined
                                                            ? username + (last? "" :" ,")
                                                            : first_name + " " +last_name +  (last? "" :" ,")
    if (fetched)
        return <div>
            <Modal
                modalId={"financial-aid-modal"}
                modalTop={modalTop}
                setModalTop={setModalTop}
            >
                <FinancialAid
                    setFinancialAidSend={setFinancialAidSend}
                    setModalTop={setModalTop}
                />
            </Modal>
            <div className="course">
                <p>search detail</p>
                <p>{courseState.course_title.title} group ({courseState.group_course_number})</p>
                <p>{courseState.start_date} until {courseState.end_date}</p>
                {/*<p></p>*/}
                <p>{showSemester(courseState.semester.semester)} {courseState.semester.year}</p>
                <p>
                <span>{courseState.course_times.length === 1 ? "course time"
                    : courseState.course_times.length >= 1? "course times "
                        : ""
                }</span>
                    {courseState.course_times.map((course_time, index) => {
                        return<div key={index}>
                            <p>{course_time.time_slot.room_number.room_title}</p>
                            <p>{course_time.time_slot.day}</p>
                            <p>{course_time.time_slot.start}</p>
                            <p>{course_time.time_slot.end}</p>
                        </div>
                    })}
                </p>

                <p>
                <span>{courseState.teachers.length === 1 ? "teacher: "
                    : courseState.teachers.length >= 1? "teachers:  "
                        : ""
                }</span>
                    {courseState.teachers.map(
                        (teacher, index) => <span key={index}>
                        {
                            showName(
                                teacher.first_name,
                                teacher.last_name,
                                teacher.username,
                                index === courseState.teachers.length-1
                            )
                        }
                    </span>
                    )
                    }
                </p>
                <p>
                <span>{courseState.instructors.length === 1 ? "instructor: "
                    : courseState.instructors.length >= 1? "instructors:  "
                        : ""
                }</span>
                    {courseState.instructors.map(
                        (instructor, index) => <p key={index}>
                            {
                                showName(
                                    instructor.first_name,
                                    instructor.last_name,
                                    instructor.username,
                                    index === courseState.instructors.length-1
                                )
                            }
                        </p>
                    )
                    }
                </p>
                <p>
                <span>{courseState.teaching_assistants.length === 1 ? "teaching assistant: "
                    : courseState.teaching_assistants.length >= 1? "teaching assistants:  "
                        : ""
                }</span>
                    {courseState.teaching_assistants.map(
                        (teaching_assistant, index) => <p key={index}>
                            {
                                showName(
                                    teaching_assistant.first_name,
                                    teaching_assistant.last_name,
                                    teaching_assistant.username,
                                    index === courseState.instructors.length-1
                                )
                            }
                        </p>
                    )
                    }
                </p>
                <p>students: {courseState.enrolled_count}</p>
                {courseState.is_member ?
                    <p>you already enrolled</p> :
                    <p
                        style={{cursor: "pointer", color:"blue"}}
                        onClick={
                        () => {
                            if (!financialAidSend)
                                setModalTop(7)
                        }
                    }
                    >
                        {financialAidSend? "financial aid sent": "financial aid available"}
                    </p>
                }
            </div>
        </div>
    return <p>search detail</p>

}