import React, { useRef, useState } from "react";
import imgToUse from "./../../images/681086_17136101_3096767_2dbcc4ed_image.png";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ForgotPassword = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();
  const forgotPasswordHandler = async (event) => {
    event.preventDefault();
    try {
      let res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBO9Xsnbl9K9s08ibLhXEx-rOOcuCk1bF4",
        {
          requestType: "PASSWORD_RESET",
          email: emailRef.current.value,
        }
      );
      console.log(res);
      setMessage("Link Send Successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container updateBox">
        <div className="row mt-5 justify-content-center">
          <img src={imgToUse} className="randomImage" />
        </div>
        <div className="row mt-3">
          <p>Enter the email with which you have registered.</p>
        </div>
        <form onSubmit={forgotPasswordHandler}>
          <div className="row mt-2 justify-content-center">
            <input
              type="text"
              required
              placeholder="Email"
              className="forgotPasswordEmail"
              ref={emailRef}
            />
          </div>
          {!message && (
            <div className="row mt-1 justify-content-center">
              <button type="submit" className="forgotPasswordEmailButton">
                Send Link
              </button>
            </div>
          )}
          {message && <span>{message}</span>}
        </form>
        <div className="row mt-1">
          <p>
            Already a user?
            <b className="text-warning" onClick={() => navigate("/login")}>
              Login
            </b>
          </p>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
