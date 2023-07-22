import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  //managing state for login and signup, also to display two form things in a single forms.

  const switchThings = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <div className="container mainBox">
      <div className="row">
        <h2>{isLogin ? "Login" : "Signup"}</h2>
      </div>
      <form>
        <div className="row">
          <input type="text" required id="name" disabled></input>
        </div>
        <div className="row ">
          <label htmlFor="name">
            <h5>Name:</h5>
          </label>
        </div>
        <div className="row mt-2 mb-2">
          <input type="text" required id="name"></input>
        </div>
        <div className="row">
          <label htmlFor="email">
            <h5>Email:</h5>
          </label>
        </div>
        <div className="row  mt-2 mb-2 ">
          <input type="email" required id="email"></input>
        </div>
        <div className="row ">
          <label htmlFor="password">
            <h5>Password:</h5>
          </label>
        </div>
        <div className="row  mt-2 mb-2">
          <input type="password" required id="password" minLength={6}></input>
        </div>
        <div className="row  mt-2 mb-2 justify-content-center">
          <div className="col-8">
            <button className="btn btn-warning btn-md" type="submit">
              {isLogin ? "Login" : "SignUp"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
