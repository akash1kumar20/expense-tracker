import React, { useEffect, useRef } from "react";
import "./ChangeBalance.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { paymentAction } from "../../redux/payment";
import axios from "axios";
const ChangeBalance = () => {
  const amountRef = useRef();
  const dipatch = useDispatch();
  const saveAmountValue = (event) => {
    event.preventDefault();
    const paymentMode = localStorage.getItem("paymentMode");
    const paymentModeChange = paymentMode.replace('"', "").replace('"', "");
    const balanceAdded = {
      balance: amountRef.current.value,
      paymentMode: paymentModeChange,
    };
    dipatch(paymentAction.addBalance(balanceAdded));
    dipatch(paymentAction.mainForm(false));
  };

  return (
    <div className="container ">
      <div className="row changeBalance">
        <h3>Add Balance</h3>
        <p>
          Write the correct balance and Wallet will change the initial balance
          on your account. This will help you to know that how much money is
          left.
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <input
              type="number"
              placeholder="Amount in ₹"
              className="amountValue"
              ref={amountRef}
            />
          </div>
          <div className="col-lg-1">
            <FontAwesomeIcon
              icon={faCheck}
              className="check p-1 mt-1"
              onClick={saveAmountValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeBalance;
