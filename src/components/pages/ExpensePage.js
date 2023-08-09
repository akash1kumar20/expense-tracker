import React, { useEffect } from "react";
import ExpenseForm from "../Tracker/ExpenseForm";
import ExpenseDetails from "../Tracker/ExpenseDetails";
import Payment from "../Tracker/Payment";
import { useNavigate } from "react-router-dom";
const ExpensePage = () => {
  const navigate = useNavigate();
  const isLogIn = localStorage.getItem("token");

  console.log(isLogIn);
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
