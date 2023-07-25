import React, { useEffect, useState } from "react";
import "./ExpenseDetails.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const ExpenseDetails = () => {
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(
          "https://expense-tracker-887e6-default-rtdb.firebaseio.com/expense.json"
        );
        let data = Object.values(res.data);
        setExpenseData(data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  let total = 0;

  return (
    <div className="container bg-success text-white mt-3">
      <div className="row firstRow">
        <div className="col-lg-1 ">
          <h2>S.No</h2>
        </div>
        <div className="col-lg-2 borderC">
          <h2>Amount</h2>
        </div>
        <div className="col-lg-3 borderC">
          <h2>Discription</h2>
        </div>
        <div className="col-lg-3 borderC">
          <h2>Category</h2>
        </div>
        <div className="col-lg-3 borderC">
          <h2>Total</h2>
        </div>
      </div>
      {expenseData.map((expense, i) => (
        <div className="row" key={expense.id}>
          <div className="col-lg-1">
            <h4>{i + 1}</h4>
          </div>
          <div className="col-lg-2 borderC">
            <h4>{expense.amount}</h4>
          </div>
          <div className="col-lg-3 borderC">
            <h4>{expense.discritpion}</h4>
          </div>
          <div className="col-lg-3 borderC">
            <h4>{expense.category}</h4>
          </div>
          <div className="col-lg-2 borderC">
            <h4>{(total = total + Number(expense.amount))}</h4>
          </div>
          <div className="col-lg-1 ">
            <h4>
              <FontAwesomeIcon icon={faTrash} className="trash me-3 mt-2" />
              <FontAwesomeIcon icon={faPenToSquare} className="pen mt-2" />
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseDetails;
