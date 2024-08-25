export default function userToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.auth_token;
  };

  const token = getToken();

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
  };

  return {
    setToken: saveToken,
    token
  }
}
