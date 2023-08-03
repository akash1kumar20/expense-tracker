import React, { useState } from "react";
import "./Payment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Options from "./Options";
const Payment = () => {
  const [showOptions, setShowOptions] = useState(false);

  const displayOption = () => {
    setShowOptions(true);
  };
  const hidedisplayOption = () => {
    setShowOptions(false);
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-lg-3 blue" onClick={displayOption} value="cash">
          <h4>Cash</h4>
          <p>₹ 720</p>
        </div>
        <div className="col-lg-3 red" onClick={displayOption}>
          <h4>Bank</h4>
          <p>₹ 52000</p>
        </div>
        <div className="col-lg-3 yellow" onClick={displayOption}>
          <h4>PayTm</h4>
          <p>₹ 1720</p>
        </div>
        <div className="col-lg-3 white">
          <h4>
            Add Account
            <FontAwesomeIcon icon={faPlus} className="ms-5 mt-3 plus" />
          </h4>
        </div>
      </div>

      <div className="mt-2 mb-1 row">
        {showOptions && (
          <h3 className=" selectAll p-2" onClick={hidedisplayOption}>
            Select All
          </h3>
        )}
      </div>
      <div className="text-dark">{showOptions && <Options />}</div>
    </div>
  );
};

export default Payment;
