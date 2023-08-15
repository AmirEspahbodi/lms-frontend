import {studentGetFinancialAidsRepository} from "../../../Data/Repositories/Students/getFinancialAidsRepository.js";

export default async function studentGetFinancialAidsUseCase(props){
    return await studentGetFinancialAidsRepository()
}