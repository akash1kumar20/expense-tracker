import React from "react";
import ExpenseForm from "../Tracker/ExpenseForm";
import ExpenseDetails from "../Tracker/ExpenseDetails";
import Payment from "../Tracker/Payment";
const ExpensePage = () => {
  return (
    <>
      <Payment />
      <ExpenseForm />
      <ExpenseDetails />
    </>
  );
};

export default ExpensePage;
