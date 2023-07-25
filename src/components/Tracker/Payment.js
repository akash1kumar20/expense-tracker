import React from "react";
import "./Payment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Payment = () => {
  return (
    <div className="container mt-2">
      <div className="row ">
        <div className="col-lg-3 blue">
          <h4>Cash</h4>
          <p>₹ 720</p>
        </div>
        <div className="col-lg-3  red">
          <h4>Bank</h4>
          <p>₹ 52000</p>
        </div>
        <div className="col-lg-3 yellow">
          <h4>PayTm</h4>
          <p>₹ 1720</p>
        </div>
        <div className="col-lg-3 white">
          <h4>
            Add Account{" "}
            <FontAwesomeIcon icon={faPlus} className="ms-5 mt-3 plus" />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Payment;
