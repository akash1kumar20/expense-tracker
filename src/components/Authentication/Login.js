import { useSelector, useDispatch } from "react-redux";
import React, { useState, useRef } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../redux/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const navigate = useNavigate();
  const autCtx = useSelector((state) => state.auth.isLoggedIn);
  const [isLogin, setIsLogin] = useState(autCtx);
  //managing state for login and signup, also to display two form things in a single forms.
  const switchThings = () => {
    setIsLogin((prevState) => !prevState);
  };

  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  //to handle the situation when request is in progress.
  const submitHandler = async (event) => {
    event.preventDefault();
    let userEmail;
    let userPassword;
    let confirmpassword;
    if (isLogin) {
      userEmail = emailRef.current.value;
      userPassword = passwordRef.current.value;
    } else {
      userEmail = emailRef.current.value;
      userPassword = passwordRef.current.value;
      confirmpassword = confirmpasswordRef.current.value;

      if (userPassword !== confirmpassword) {
        return toast("Password Not Match, please enter same password");
      }
    }
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
      dispatch(authActions.login(res.data));
      {
        isLogin &&
          toast.success("Welcome Back", {
            position: "top-center",
            theme: "colored",
            autoClose: 2000,
          });
      }
      {
        !isLogin &&
          toast.success("Welcome", {
            position: "top-center",
            theme: "colored",
            autoClose: 2000,
          });
      }
      setTimeout(() => {
        {
          isLogin ? navigate("/") : navigate("/profile");
        }
      }, 2500);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      alert("Request Failed");
      setIsLoading(false);
      navigate("/login");
    }
  };
  const forgotPassword = () => {
    navigate("/forgotPassword");
  };
  return (
    <>
      <div className="container mainBox mt-2">
        <div className="row mb-3 headingStyle">
          <h2>{isLogin ? "Login" : "Signup"}</h2>
        </div>
        <form onSubmit={submitHandler}>
          <div className="row">
            <label htmlFor="email">
              <h5>Email:</h5>
            </label>
          </div>
          <div className="row mt-2 mb-2 justify-content-center">
            <div className="col-10">
              <input
                type="email"
                required
                id="email"
                ref={emailRef}
                placeholder="Your Email"
              ></input>
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
                placeholder="Enter Password"
              ></input>
            </div>
            {isLogin && (
              <span className="mt-2 text-warning" onClick={forgotPassword}>
                Forgot Password?
              </span>
            )}
          </div>
          {!isLogin && (
            <div className="row">
              <label htmlFor="confirmpassword">
                <h5>Confirm Password:</h5>
              </label>
            </div>
          )}
          {!isLogin && (
            <div className="row mt-2 mb-2 justify-content-center">
              <div className="col-10">
                <input
                  type="password"
                  required
                  id="confirmpassword"
                  ref={confirmpasswordRef}
                  minLength={6}
                  placeholder="Confirm Password"
                ></input>
              </div>
            </div>
          )}

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
      <ToastContainer />
    </>
  );
};

export default Login;
