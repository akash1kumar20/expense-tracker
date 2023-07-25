import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
const MainNavigation = () => {
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
        <ul className="navbar-nav">
          <li className="nav-item ms-md-5 me-md-2">
            <NavLink to="login" className="NavLink">
              LOGIN
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item ms-md-5 me-md-2"> LOGOUT</li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item ms-md-1 me-md-2">
            <label class="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
