import TeacherSessionAPI from "../../DataSource/API/teachers/sessionAPI.js";

export default async function TeacherSessionRepository(props){
    return await TeacherSessionAPI(props)
}