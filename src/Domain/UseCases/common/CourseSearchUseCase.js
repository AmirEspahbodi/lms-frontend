import {CourseSearchRepository} from "../../../Data/Repositories/common/CourseSearchRepository.js";

async function CourseSearchUseCase(props){
    const data = {
        content: props.searchContent.replaceAll("+")
    }

    return await CourseSearchRepository(data)
}

export {CourseSearchUseCase}