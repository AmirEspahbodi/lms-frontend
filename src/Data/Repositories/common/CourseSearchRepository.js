import {CourseSearchAPI} from "../../DataSource/API/common/CourseSearchAPI.js";

async function CourseSearchRepository(props){
    return await CourseSearchAPI(props);
}
export {CourseSearchRepository}