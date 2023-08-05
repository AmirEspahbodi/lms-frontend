import APP_ROUTES from "../constants/Routs.js";

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

function dateSub(currDate, theData) {
  currDate = new Date(currDate);
  theData = new Date(theData);
  const t = Math.abs(theData - currDate);
  var cd = 24 * 60 * 60 * 1000,
    ch = 60 * 60 * 1000,
    d = Math.floor(t / cd),
    h = Math.floor((t - d * cd) / ch),
    m = Math.round((t - d * cd - h * ch) / 60000),
    pad = function (n) {
      return n < 10 ? "0" + n : n;
    };
  if (m === 60) {
    h++;
    m = 0;
  }
  if (h === 24) {
    d++;
    h = 0;
  }
  return {
    day: d,
    hour: pad(h),
    minute: pad(m),
  };
}

export { showWeekDay, showSemester, goToCourse, goToSession, dateSub };
