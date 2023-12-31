import React, { useEffect, useState } from "react";
import ExpenseForm from "../Tracker/ExpenseForm";
import ExpenseDetails from "../Tracker/ExpenseDetails";
import Payment from "../Tracker/Payment";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ExpensePage = () => {
  const navigate = useNavigate();
  const isLogIn = localStorage.getItem("token");
  useEffect(() => {
    if (!isLogIn) {
      toast.warning("Please Login First!", {
        position: "top-center",
        theme: "dark",
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  });

  return (
    <>
      <ToastContainer />
      {isLogIn && (
        <>
          <Payment />
          <ExpenseForm />
          <ExpenseDetails />
        </>
      )}
    </>
  );
};

export default ExpensePage;
