class CourseSearchResponseModel{
    constructor({
        id, course_title, course_times,
        group_course_number, semester, teachers, instructors
    }) {
        this.id = id;
        this.course_title = course_title;
        this.course_times = course_times;
        this.group_course_number = group_course_number;
        this.semester = semester;
        this.teachers = teachers;
        this.instructors = instructors;
    }
}

export {CourseSearchResponseModel}