import axios from "axios";
import SERVER_APIS from "../../../../Core/constants/ServerAPIs.js";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure.js";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure.js";
import {CourseSearchResponseModel} from "../../../Models/CourseSearchModel.js";
import {CourseSearchFailure} from "../../../../Core/Failure/CourseSearchFailure.js";

async function CourseSearchAPI(props) {
    console.log(props.content)
    try {
        const response = await axios.get(
            SERVER_APIS.COURSE_SEARCH,
            {params: {content: props.content}}
        );
        console.log(response.data)
        const responseData = []
        for (let course of response.data){
            console.log(course)
            responseData.push(new CourseSearchResponseModel(course));
        }
        return responseData;
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

export {CourseSearchAPI}