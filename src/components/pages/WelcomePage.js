import React from "react";
import imgToUse from "./../../images/EXPENSES-Large-Banner-Desktop-V2.png";
const WelcomePage = () => {
  return (
    <>
      <h1 className="mt-2 mb-2">Welcome to Expense Tracker!!!</h1>
      <img src={imgToUse} />
    </>
  );
};

export default WelcomePage;
