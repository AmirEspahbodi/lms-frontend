import financialAidRepository from "../../../Data/Repositories/common/financialAidRepository.js";

export default async function financialAidUseCase(props){
    return await financialAidRepository(props)
}