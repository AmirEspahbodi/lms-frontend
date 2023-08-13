import SERVER_APIS from "../../../../Core/constants/ServerAPIs.js";
import ServerConnectionFailure from "../../../../Core/Failure/ServerConnectionFailure.js";
import UnknownFailure from "../../../../Core/Failure/UnknownFailure.js";
import {CourseSearchFailure} from "../../../../Core/Failure/CourseSearchFailure.js";
import {getRequest, postRequest} from "../../../../Core/security/sendRequest.js";
import {FinancialAidResponseModel} from "../../../Models/CourseSearchModel.js";


export default async function financialAidAPI(props){
    console.log("financialAidAPI")
    console.log(props)
    try {
        const response = await postRequest(
            {
                url: SERVER_APIS.FINANCIAL_AID(props.course_id),
                data: props.data
            },
        );
        console.log(response.data)
        return new FinancialAidResponseModel(response.data);
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
