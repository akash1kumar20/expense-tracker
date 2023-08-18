import React, { useState } from "react";
import "./Options.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import ShowRecords from "./ShowRecords";
import ChangeBalance from "./ChangeBalance";
import { useSelector, useDispatch } from "react-redux";
import { paymentAction } from "../../redux/payment";
const Options = () => {
  const changeBalance = useSelector((state) => state.payment.paymentForm);
  const dispatch = useDispatch();
  const [showRecords, setShowRecords] = useState(false);
  const showRecordsHandler = () => {
    setShowRecords(true);
  };
  const balanceChangeHandler = () => {
    dispatch(paymentAction.paymentForm(true));
  };
  const recordsHandler = () => {
    setShowRecords(false);
  };
  return (
    <div className=" row bg-light justify-content-between">
      <div className="col-md-4 ms-5 balance" onClick={balanceChangeHandler}>
        <h2>Adjust Balance</h2>
      </div>
      <div className="col-md-4 me-5 records">
        <h2 onClick={showRecordsHandler}>
          <FontAwesomeIcon icon={faListUl} className="me-1" />
          Records
        </h2>
      </div>
      {showRecords && (
        <div className="row justify-content-center">
          <div className="changeRecordBox ">
            <ShowRecords />
            <p className="cancel mt-4 me-4" onClick={recordsHandler}>
              Cancel
            </p>
          </div>
        </div>
      )}
      {changeBalance && (
        <div className="row justify-content-center">
          <div className="changeBalanceBox ">
            <ChangeBalance />
            <p
              className="cancel mt-4 me-4"
              onClick={() => dispatch(paymentAction.paymentForm(false))}
            >
              Cancel
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Options;
