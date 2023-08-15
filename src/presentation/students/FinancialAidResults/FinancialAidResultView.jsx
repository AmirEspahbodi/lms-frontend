import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../../../Core/contexts/root-context.jsx";
import APP_ROUTES from "../../../Core/constants/Routs.js";
import studentGetFinancialAidsUseCase from "../../../Domain/UseCases/Students/getFinancialAidsUseCase.js";
import Failure from "../../../Core/Failure/Failure.js";

export default function StudentFinancialAidResultView(props){
    const navigate = useNavigate();
    const [financialAids, setFinancialAids] = useState([]);
    const authContext = useContext(AuthContext);
    if (authContext.isAuthenticated !== null && authContext.isAuthenticated===false) {
        navigate(APP_ROUTES.LOGIN_USER);
    } else if (authContext.isAuthenticated === true && authContext.user.role % 2 !== 0){
        navigate(APP_ROUTES.SPLASH);
    }
    useEffect(
        () => {
            if (authContext.isAuthenticated === true && authContext.user.role % 2 === 0){
                const result = studentGetFinancialAidsUseCase()
                result.then((result) => {
                    if (result instanceof Failure){

                    } else {
                        setFinancialAids(result);
                    }
                })
            }
        },
        []
    )
    return <div>
        {financialAids.map((financialAid, index) => (
            <div key={index} className='course'>
                <p>applying_reason: {financialAid.applying_reason}</p>
                <p>annual_income: {financialAid.annual_income}</p>
                <p>ability_to_pay: {financialAid.ability_to_pay}</p>
                <p>result: {financialAid.result}</p>
                <p>created_at: {financialAid.created_at}</p>
                <
                    p
                    style={{color: financialAid.reviewed? financialAid.is_accepted? 'green' : "red" : 'white'}}
                >
                    {financialAid.reviewed? financialAid.is_accepted? 'accepted' : "rejected" : 'not reviewed'}
                </p>
            </div>
        ))}
    </div>
}