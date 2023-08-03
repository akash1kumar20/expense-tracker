import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./MainNavigation.css";
import AuthContext from "../../data_room/auth-context";
import { ThemeChanger } from "../../App";
import ReactSwitch from "react-switch";
const MainNavigation = () => {
  const navigate = useNavigate();
  const autCtx = useContext(AuthContext);
  const themeCtx = useContext(ThemeChanger);
  const toggleTheme = () => {};
  const isLoggedIn = autCtx.isLoggedIn;
  const logOutHandler = () => {
    autCtx.logOut();
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-md bg-dark text-white navbar-dark ">
      <div className="container-fluid justify-content-between">
        <ul className="navbar-nav">
          <li className="nav-item ms-md-5 me-md-2">
            <NavLink to="/" className="NavLink">
              HOME
            </NavLink>
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item ms-md-5 me-md-2">
            <NavLink to="expense" className="NavLink">
              EXPENSE
            </NavLink>
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item ms-md-5 me-md-2">
            <NavLink to="profile" className="NavLink">
              PROFILE
            </NavLink>
          </li>
        </ul>
        {!isLoggedIn ? (
          <ul className="navbar-nav">
            <li className="nav-item ms-md-5 me-md-2">
              <NavLink to="login" className="NavLink">
                LOGIN
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav">
            <li className="nav-item ms-md-5 me-md-2" onClick={logOutHandler}>
              LOGOUT
            </li>
          </ul>
        )}

        <ul className="navbar-nav">
          <li className="nav-item mt-1 me-md-4">
            <ReactSwitch
              onChange={toggleTheme}
              checked={themeCtx.theme === "dark"}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
