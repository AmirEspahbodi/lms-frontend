class TeacherCourseDetailModel {
  constructor(data) {
    this.sessions = data.sessions;
  }
}

class TeacherSetStudentResponseModel {
  constructor(data) {
    this.access = data.access;
  }
}

export { TeacherCourseDetailModel, TeacherSetStudentResponseModel };
