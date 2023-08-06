import React, { useEffect, useContext } from "react";
import ExpenseForm from "../Tracker/ExpenseForm";
import ExpenseDetails from "../Tracker/ExpenseDetails";
import Payment from "../Tracker/Payment";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../data_room/auth-context";
const ExpensePage = () => {
  const navigate = useNavigate();
  const autCtx = useContext(AuthContext);
  const isLogIn = autCtx.isLoggedIn;
  useEffect(() => {
    if (!isLogIn) {
      alert("Please Login First!");
      navigate("/login");
    }
  });

  return (
    <>
      <Payment />
      <ExpenseForm />
      <ExpenseDetails />
    </>
  );
};

export default ExpensePage;
