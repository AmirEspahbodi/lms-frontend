import Failure from "../../../Core/Failure/Failure";
import STHomeRepository from "../../../Data/Repositories/common/homeRepository";

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

export default async function STHomeUseCase() {
  const result = await STHomeRepository();
  if (result instanceof Failure) return result;
  const currDateObj = new Date(result.now);
  const currDateStr = `${currDateObj.getFullYear()}/${currDateObj.getMonth()}/${currDateObj.getDate()}`;

  let weeklyData = [[], [], [], [], [], [], [], []];
  let next48h = [];
  let exams = [];
  let assignments = [];
  let tdate;
  let tdatestr;
  let diff;
  for (let session of result.sessions) {
    tdate = new Date(session.date.replace("-", "/").replace("-", "/"));
    tdatestr = `${tdate.getFullYear()}/${tdate.getMonth()}/${tdate.getDate()}`;
    diff = dateSub(currDateStr, tdatestr);
    if (diff.day <= 2) next48h.push(session);
    weeklyData[diff.day].push(session);
    if (session.exams.length !== 0) {
      for (let exam of session.exams) {
        exams.push(exam);
      }
    }
    if (session.assignments.length !== 0) {
      for (let assignment of session.assignments) {
        assignments.push(assignment);
      }
    }
  }
  return {
    weeklyData: weeklyData,
    next48h: next48h,
    courses: result.courses,
    exams: exams,
    assignments: assignments,
  };
}
