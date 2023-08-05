import AuthHeader from "../../../../Core/components/AuthHeader.jsx";
import APP_ROUTES from "../../../../Core/constants/Routs.js";
import PasswordResetConfirmComponent from "./components/PasswordResetConfirmComponent.jsx";
import PasswordResetVerifyCodeComponent from "./components/PasswordResetVerifyCodeComponent.jsx";
import PasswordResetSendEmailComponent from "./components/PasswordResetSendEmailComponent.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";



function PasswordResetView() {
    const navigator = useNavigate()
    const [level, setLevel] = useState("email");
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')

    const goToGetCode = () => {
        setLevel('verifyCode');
    }
  return (
    <div>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <AuthHeader
                heading="get code to verify email address"
                paragraph="has any problem to get code? "
                linkName="Contact Us"
                linkUrl={APP_ROUTES.CONTACT_US}
            />
            {level==="email" ? <PasswordResetSendEmailComponent email={email} setEmail={setEmail} setLevel={setLevel} goToGetCode={goToGetCode}/>
                : level==="verifyCode" ? <PasswordResetVerifyCodeComponent code={code} setCode={setCode} goToGetPassword={() => {
                    setLevel('confirm')
                    }}/>
                    : level==='confirm'? <PasswordResetConfirmComponent code={code} goNext={() => {
                            navigator(APP_ROUTES.LOGIN_USER)
                        }}/>
                        : <p>refresh page</p>
            }
        </div>
      </div>
    </div>
  );
}

export default PasswordResetView;
