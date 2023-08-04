import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext, { AuthContextProvider } from "../../data_room/auth-context";
const ChangePassword = () => {
  const autCtx = useContext(AuthContext);
  //we have the token in the context
  const navigate = useNavigate();
  const changePasswordHandler = async (event) => {
    event.preventDefault();
    const newPassword = event.target.changePassword.value;
    try {
      let res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBO9Xsnbl9K9s08ibLhXEx-rOOcuCk1bF4",
        {
          idToken: autCtx.token,
          password: newPassword,
          returnSecureToken: true,
          //true because we want new token on submit
        }
      );
      console.log(res);
      alert("Password Change Successfully!");
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };
  const cancelChange = (event) => {
    event.preventDefault();
    navigate("/profile");
  };
  return (
    <div className="container mt-5">
      <form onSubmit={changePasswordHandler}>
        <div className="col-5">
          <label htmlFor="changePassword">
            <h2 className=" mt-5">Enter New Password:</h2>
          </label>
        </div>
        <br />
        <div className="col-7 mt-3">
          <input
            type="password"
            id="changePassword"
            name="changePassword"
            required
            minLength={6}
          />
        </div>
        <br />
        <button className="btn btn-success btn-lg mt-5">Change Password</button>
        <button
          className="btn btn-danger btn-lg mt-5 ms-3"
          onClick={cancelChange}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
