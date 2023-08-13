import {SearchDetailAPI} from "../../DataSource/API/common/SearchDetailAPI.js";

export default async function SearchDetailRepository(props) {
    return await SearchDetailAPI(props);
}