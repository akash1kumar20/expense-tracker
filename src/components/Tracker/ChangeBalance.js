import React from "react";
import "./ChangeBalance.css";

const ChangeBalance = () => {
  return (
    <div className="container ">
      <h2>Choose how to adjust your balance</h2>
      <div className="row changeBalance mt-3">
        <h3>Adjust by record</h3>
        <p>
          Write the correct balance and Wallet will create a correction record
          for it. Use this if you've forgotten to track just a few expenses.
        </p>
      </div>
      <div className="row changeBalance">
        <h3>Change initial balance</h3>
        <p>
          Write the correct balance and Wallet will change the initial balance
          on your account. Use this if you haven't tracked for a long time.
        </p>
      </div>
    </div>
  );
};

export default ChangeBalance;
