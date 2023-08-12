import Failure from "./Failure.js";

class CourseSearchFailure extends Failure {
    constructor({ detail}) {
        super();
        this.detail = detail;
    }
}

export {CourseSearchFailure}