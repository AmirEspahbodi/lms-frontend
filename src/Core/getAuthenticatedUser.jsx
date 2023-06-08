import axios from "axios";
import SERVER_APIS from "./constants/ServerAPIs";

async function getAuthenticatedUser() {
  const tokenDataString = sessionStorage.getItem("token");
  const userDataString = sessionStorage.getItem("user");
  const tokenData = JSON.parse(tokenDataString);
  const userData = JSON.parse(userDataString);
  if (!tokenData) return { authenticated: false, user: userData };
  axios.defaults.headers.common["Authorization"] = `Token ${tokenData.token}`;

  try {
    const token_verify = await axios.post(SERVER_APIS.TOKEN_VERIFY);
    return { authenticated: true, user: userData };
  } catch (error) {
    return { authenticated: false, user: userData };
  }
}

export default getAuthenticatedUser;
