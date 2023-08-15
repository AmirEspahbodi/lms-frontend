import studentGetFinancialAidsAPI from "../../DataSource/API/students/getFinancialAidsAPI.js";

export async function studentGetFinancialAidsRepository(props){
    return await studentGetFinancialAidsAPI()
}