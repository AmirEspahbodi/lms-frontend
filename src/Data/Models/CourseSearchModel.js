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

class CourseSearchDetailResponseModel extends CourseSearchResponseModel{
    constructor(
        {
            id, course_title, course_times,
            group_course_number, semester, teachers, instructors,
            start_date, end_date, teaching_assistants, enrolled_count, is_member
        }
    ) {
        super({
            id, course_title, course_times,
            group_course_number, semester, teachers, instructors
        });
        this.start_date = start_date;
        this.end_date = end_date;
        this.teaching_assistants = teaching_assistants;
        this.enrolled_count = enrolled_count;
        this.is_member = is_member;
    }
}

class FinancialAidResponseModel {
    constructor({
                    applying_reason,
                    annual_income,
                    ability_to_pay,
                }) {
        this.applying_reason = applying_reason;
        this.annual_income = annual_income;
        this.ability_to_pay = ability_to_pay;

    }

}

export {CourseSearchResponseModel, CourseSearchDetailResponseModel, FinancialAidResponseModel}