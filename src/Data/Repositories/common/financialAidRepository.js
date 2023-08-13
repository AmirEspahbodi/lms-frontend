import financialAidAPI from "../../DataSource/API/common/financialAidAPI.js";

export default async function financialAidRepository(props){
    return await financialAidAPI(props)
}