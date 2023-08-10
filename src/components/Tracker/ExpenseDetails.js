import React, { useEffect, useState } from "react";
import "./ExpenseDetails.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { expenseAction } from "../../redux/expense";
const ExpenseDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [expenseData, setExpenseData] = useState([]);
  const emailValue = localStorage.getItem("email");
  let changeEmail;
  if (emailValue === null) {
    changeEmail = 0;
  } else {
    changeEmail = emailValue.replace("@", "").replace(".", "");
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(
          ` https://expense-tracker-887e6-default-rtdb.firebaseio.com/expense${changeEmail}.json`
        );
        const fetchData = [];
        for (let key in res.data) {
          fetchData.push({ ...res.data[key], id: key });
          //because key is important to delete and edit element
        }
        dispatch(expenseAction.setExpense(fetchData));
        setExpenseData(fetchData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  });
  const deleteItems = async (expense) => {
    try {
      let res = await axios.delete(
        `https://expense-tracker-887e6-default-rtdb.firebaseio.com/expense${changeEmail}/${expense.id}.json`
      );
      console.log(res);
      toast.warning("Expense Deleted!", {
        position: "top-right",
        theme: "light",
        autoClose: 2000,
      });
    } catch (err) {
      console.log(err);
      toast.warning("Please Try Again!", {
        position: "top-right",
        theme: "dark",
        autoClose: 2000,
      });
    }
  };
  const updateItems = (expense) => {
    localStorage.setItem("expense", JSON.stringify(expense));
    navigate("/updateExpense");
  };
  let total = 0;
  if (expenseData.length > 0) {
    return (
      <>
        <ToastContainer />
        <div className="container bg-success text-white mt-3">
          <div className="row firstRow">
            <div className="col-1 ">
              <h3>S.No</h3>
            </div>
            <div className="col-2 borderC">
              <h3>Amount</h3>
            </div>
            <div className="col-2 borderC">
              <h3>Discription</h3>
            </div>
            <div className="col-2 borderC">
              <h3>Category</h3>
            </div>
            <div className="col-2 borderC">
              <h3>Pay From</h3>
            </div>
            <div className="col-3 borderC">
              <h3>Total</h3>
            </div>
          </div>
          {expenseData.map((expense, i) => (
            <div className="row" key={expense.id}>
              <div className="col-1">
                <h5>{i + 1}</h5>
              </div>
              <div className="col-2 borderC">
                <h5>{expense.amount}</h5>
              </div>
              <div className="col-2 borderC">
                <h5>{expense.discritpion}</h5>
              </div>
              <div className="col-2 borderC">
                <h5>{expense.category}</h5>
              </div>
              <div className="col-2 borderC">
                <h5>{expense.payment}</h5>
              </div>
              <div className="col-2 borderC">
                <h4>{(total = total + Number(expense.amount))}</h4>
              </div>
              <div className="col-1 ">
                <h5>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="trash me-3 mt-2"
                    onClick={() => deleteItems(expense)}
                  />
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="pen mt-2"
                    onClick={() => updateItems(expense)}
                  />
                </h5>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container empty">
          <div className="row">
            <h1>Please add some expenses...</h1>
          </div>
        </div>
      </>
    );
  }
};

export default ExpenseDetails;
