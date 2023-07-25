import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../header/MainNavigation";
const Root = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default Root;
