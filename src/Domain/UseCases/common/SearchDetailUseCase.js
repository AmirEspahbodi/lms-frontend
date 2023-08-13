import SearchDetailRepository from "../../../Data/Repositories/common/SearchDetailRepository.js";

export default async function SearchDetailUseCase(props){
    return await SearchDetailRepository(props);
}