import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ShowRecords.css";
const ShowRecords = () => {
  const [dataRecord, setDataRecord] = useState([]);
  useEffect(() => {
    const emailValue = localStorage.getItem("userEmail");
    let changeEmail;
    if (emailValue === null) {
      changeEmail = 0;
    } else {
      changeEmail = emailValue.replace("@", "").replace(".", "");
    }
    const fetchData = async () => {
      try {
        let res = await axios.get(
          ` https://expense-tracker-887e6-default-rtdb.firebaseio.com/expense${changeEmail}.json`
        );
        let data = Object.values(res.data);
        setDataRecord(data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const payment = JSON.parse(localStorage.getItem("paymentMode"));

  return (
    <div className="container">
      {dataRecord
        .filter((expense) => expense.payment === payment)
        .map((expense, i) => (
          <div className="row showBox" key={i}>
            <div className="col-lg-6">
              <h3>{expense.category}</h3>
              <p>{expense.discritpion}</p>
            </div>
            <div className="col-lg-6">
              <h3>₹{expense.amount}</h3>
              <p>{expense.payment}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShowRecords;
