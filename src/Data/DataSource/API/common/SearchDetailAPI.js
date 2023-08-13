import axios from "axios";
import SERVER_APIS from "../../../../Core/constants/ServerAPIs.js";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure.js";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure.js";
import {CourseSearchDetailResponseModel} from "../../../Models/CourseSearchModel.js";
import {CourseSearchFailure} from "../../../../Core/Failure/CourseSearchFailure.js";
import {getRequest} from "../../../../Core/security/sendRequest.js";


export async function SearchDetailAPI(props){
    try {
        const response = await getRequest(
            {
                url: SERVER_APIS.COURSE_SEARCH_DETAIL(props.course_id)
            },
        );
        console.log("SearchDetailAPI")
        console.log(response.data)
        return new CourseSearchDetailResponseModel(response.data);
    } catch (error) {
        if (error.response) {
            return new CourseSearchFailure(error.response.data);
        } else if (error.request) {
            return new ServerConnectionFailure();
        } else {
            return new UnknownFailure();
        }
    }
}
