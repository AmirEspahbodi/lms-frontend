import {goToCourse, showSemester} from "../../../../Core/utils/utilsFuncs.js";
import {useNavigate} from "react-router-dom";
import APP_ROUTES from "../../../../Core/constants/Routs.js";

export default function SearchCourseComponent({courses}) {
    const navigate = useNavigate();
    return <>
        <div className="courses">
            {courses.map((course, index) => {
                return (
                    <div
                        key={index}
                        onClick={(event) => {
                            navigate(APP_ROUTES.SEARCH_DETAIL.replace(":", "").replace("courseId", course.id));
                        }}
                        className="course"
                    >
                        <div className="course-title">
                            {course?.course_title.title} group (
                            {course?.group_course_number})
                        </div>
                        <div className="teacher-name"></div>
                        <div className="teacher-name">
                            {
                                course?.teachers.length == 1 ? <span>teacher: </span>
                                    : course?.teachers.length > 1 ? <span>teachers: </span>
                                        : <></>
                            }
                            {course?.teachers.map(
                                (teacher, index) =>
                                    <span key={index}>
                                        {((teacher.firstname === undefined || false || teacher.firstname === '')
                                            &&
                                            (teacher.lastname === undefined || false || teacher.lastname === ''))?
                                            teacher.username:
                                            teacher.first_name+" "+teacher.last_name
                                        }
                                    </span>
                                )
                            }
                        </div>
                        <div className="teacher-name">
                            {
                                course?.instructors.length == 1 ? <span>instructor: </span>
                                    : course?.instructors.length > 1 ? <span>instructors: </span>
                                        : <></>
                            }
                            {course?.instructors.map(
                                (instructor, index) =>
                                    <span key={index}>
                                        {instructor.first_name}{" "}
                                        {instructor.last_name}
                                    </span>
                            )
                            }
                        </div>
                        <div className="course-data">
                            period {showSemester(course?.semester.semester)}{" "}
                            {course?.semester.year}
                        </div>
                        <div>{course.course_times.map(
                            (course_time, index) => <div key={index}>
                                <p>{course_time.time_slot.room_number.room_number}</p>
                                <p>{course_time.time_slot.room_number.room_title}</p>
                                <p>{course_time.time_slot.day}</p>
                                <p>{course_time.time_slot.start}</p>
                                <p>{course_time.time_slot.end}</p>
                            </div>
                        )}</div>
                    </div>
                )
            })}
        </div>
    </>
}