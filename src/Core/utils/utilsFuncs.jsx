import APP_ROUTES from "../constants/Routs";

function showWeekDay(day) {
  if (day == 1) return "Monday";
  else if (day == 2) return "Tuesday";
  else if (day == 3) return "Wednesday";
  else if (day == 4) return "Thursday";
  else if (day == 5) return "Friday";
  else if (day == 6) return "Saturday";
  else if (day == 7) return "Sunday";
}

function showSemester(semester) {
  if (semester == 1) return "Fall";
  else if (semester == 2) return "Spring";
  else if (semester == 3) return "winter";
}

function goToCourse(e, id, navigate) {
  console.log(`goToCourse ${id}`);
  if (window.location.pathname.split("/").includes("student"))
    navigate(
      APP_ROUTES.STUDENT_COURSE_DETAIL.replace(":", "").replace("courseId", id)
    );
  else if (window.location.pathname.split("/").includes("teacher"))
    navigate(
      APP_ROUTES.TEACHER_COURSE_DETAIL.replace(":", "").replace("courseId", id)
    );
}

function goToSession(e, id, navigate) {
  console.log(`goToSession ${id}`);
}

export { showWeekDay, showSemester, goToCourse, goToSession };
