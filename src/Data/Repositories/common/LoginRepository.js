import LoginAPI from "../../DataSource/API/loginAPI.js";

async function LoginRespository(loginState) {
  return await LoginAPI(loginState);
}

export default LoginRespository;
