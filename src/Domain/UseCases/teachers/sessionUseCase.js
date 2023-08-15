import TeacherSessionRepository from "../../../Data/Repositories/Teachers/sessionRepository.js";

export default async function TeacherSessionUseCase(props){
    return await TeacherSessionRepository(props);
}