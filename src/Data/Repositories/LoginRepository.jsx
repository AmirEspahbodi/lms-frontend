import LoginAPI from "../DataSource/API/loginAPI";

async function LoginRespository(loginState) {
  return await LoginAPI(loginState);
}

export default LoginRespository;
