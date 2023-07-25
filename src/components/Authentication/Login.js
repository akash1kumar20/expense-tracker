import React, { useState, useRef, useContext } from "react";
import "./Login.css";
import axios from "axios";
import AuthContext from "../../data_room/auth-context";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  //managing state for login and signup, also to display two form things in a single forms.
  const switchThings = () => {
    setIsLogin((prevState) => !prevState);
  };
  const autCtx = useContext(AuthContext);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  //to handle the situation when request is in progress.
  const submitHandler = async (event) => {
    event.preventDefault();
    const userEmail = emailRef.current.value;
    const userPassword = passwordRef.current.value;
    localStorage.setItem("userEmail", userEmail);
    console.log(userEmail, userPassword);
    setIsLoading(true);
    let url;
    if (isLogin) {
      //to handle login case
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBO9Xsnbl9K9s08ibLhXEx-rOOcuCk1bF4";
    } else {
      //to handle signup case
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBO9Xsnbl9K9s08ibLhXEx-rOOcuCk1bF4";
    }
    try {
      let res = await axios.post(url, {
        email: userEmail,
        password: userPassword,
        retunrSecureToken: true,
      });
      autCtx.logIn(res.data.idToken);
      {
        isLogin ? alert(`Welcome Back`) : alert(`Welcome`);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      alert("Request Failed");
    }
  };
  return (
    <div className="container mainBox">
      <div className="row mb-3 headingStyle">
        <h2>{isLogin ? "Login" : "Signup"}</h2>
      </div>
      <form onSubmit={submitHandler}>
        <div className="row">
          <label htmlFor="email">
            <h5>Email:</h5>
          </label>
        </div>
        <div className="row  mt-2 mb-2 justify-content-center">
          <div className="col-10">
            <input type="email" required id="email" ref={emailRef}></input>
          </div>
        </div>
        <div className="row">
          <label htmlFor="password">
            <h5>Password:</h5>
          </label>
        </div>
        <div className="row mt-2 mb-2 justify-content-center">
          <div className="col-10">
            <input
              type="password"
              required
              id="password"
              ref={passwordRef}
              minLength={6}
            ></input>
          </div>
        </div>
        <div className="row mt-3  justify-content-center">
          <div className="col-10">
            {!isLoading ? (
              <button className="btn btn-success btn-md">
                {isLogin ? "Login" : "SignUp"}
              </button>
            ) : (
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <span>{isLogin ? "New User ?" : "Already have a account ?"}</span>
        </div>
        <div className="row mt-1 justify-content-center">
          <div className="col-10">
            <button
              className="btn btn-info btn-md"
              onClick={switchThings}
              type="button"
            >
              {isLogin ? "Create an account" : "Login into your account"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
