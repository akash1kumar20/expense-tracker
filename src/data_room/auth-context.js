import React, { useState } from "react";
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  logOut: () => {},
  logIn: (token) => {},
});

export const AuthContextProvider = (props) => {
  const tokenValue = localStorage.getItem("token");
  const [token, setToken] = useState(tokenValue);

  const userIsLoggedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    setTimeout(logOutHandler, 500000);
  };
  const logOutHandler = () => {
    setToken(null);
    localStorage.clear();
  };
  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    logIn: loginHandler,
    logOut: logOutHandler,
  };
  console.log(contextValue);
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
