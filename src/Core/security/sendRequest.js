import axios from "axios";

const getAuthorizationHeader = () => {
  const tokenStringData = sessionStorage.getItem("token");
  const tokenData = JSON.parse(tokenStringData);
  if (tokenData) return "Token " + tokenData.token;
  else return null;
};

async function setAuthorizationHeader() {
  const authorizationHeader = getAuthorizationHeader();
  if (authorizationHeader)
    axios.defaults.headers.common["Authorization"] = authorizationHeader;
}

async function getRequest({ url, data = null }) {
  setAuthorizationHeader();
  const response = await axios.get(url, data);
  return response;
}

async function postRequest({ url, data = null }) {
  setAuthorizationHeader();
  const response = await axios.post(url, data);
  return response;
}

async function putRequest({ url, data = null }) {
  setAuthorizationHeader();
  const response = axios.put(url, data);
  return response;
}

async function deleteRequest({ url, data = null }) {
  setAuthorizationHeader();
  const response = axios.delete(url, data);
  return response;
}

export { getRequest, postRequest, putRequest, deleteRequest };
