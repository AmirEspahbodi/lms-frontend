async function getAuthenticatedUser() {
  /*
  return authenticated, user
  could be {false, null}, {false, userObject}, {true, userObject} 
  */
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  if (!userToken) return false, null;
}

export default getAuthenticatedUser;
