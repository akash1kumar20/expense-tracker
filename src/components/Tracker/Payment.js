import React, { useState, useEffect } from "react";
import "./Payment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Options from "./Options";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { paymentAction } from "../../redux/payment";
const Payment = () => {
  const showOptions = useSelector((state) => state.payment.mainForm);
  const dispatch = useDispatch();
  const paymentItems = useSelector((state) => state.payment.paymentItems);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [balance, setBalance] = useState([]);
  const displayOption = () => {
    dispatch(paymentAction.mainForm(true));
  };
  const hidedisplayOption = () => {
    dispatch(paymentAction.mainForm(false));
  };
  const paymentMode = (event) => {
    event.preventDefault();
    setSelectedPayment(event.target.value);
    localStorage.setItem("paymentMode", JSON.stringify(event.target.value));
  };
  useEffect(() => {
    const fetchData = async () => {
      let emailValue = localStorage.getItem("email");
      let changeEmail;
      if (emailValue === null) {
        changeEmail = 0;
      } else {
        changeEmail = emailValue.replace("@", "").replace(".", "");
      }

      try {
        let res = await axios.get(
          `https://new-project-2c75e-default-rtdb.firebaseio.com/balance${changeEmail}.json`
        );
        const fetchData = [];
        for (let key in res.data) {
          fetchData.push({ ...res.data[key], id: key });
        }
        setBalance(fetchData);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  });
  useEffect(() => {
    const fetchData = async () => {
      console.log("after", paymentItems);
      let emailValue = localStorage.getItem("email");
      let changeEmail;
      if (emailValue === null) {
        changeEmail = 0;
      } else {
        changeEmail = emailValue.replace("@", "").replace(".", "");
      }
      try {
        let res = await axios.put(
          ` https://new-project-2c75e-default-rtdb.firebaseio.com/balance${changeEmail}.json`,
          paymentItems
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
      dispatch(paymentAction.paymentForm(false));
      // window.location.reload(true);
    };
    fetchData();
  }, [paymentItems]);

  return (
    <div className="container mt-2">
      <form onClick={paymentMode}>
        <div className="row">
          <div className="col-lg-3 blue">
            <h4>
              <input
                type="text"
                value="Cash"
                readOnly
                onClick={displayOption}
                className="paymentHeading"
              />
            </h4>
            {balance
              .filter((balance) => balance.paymentMode === "Cash")
              .map((balance) => (
                <p key={balance.id}>₹ {Number(balance.balance)}</p>
              ))}
          </div>

          <div className="col-lg-3 red">
            <h4>
              <input
                type="text"
                value="Bank"
                readOnly
                onClick={displayOption}
                className="paymentHeading"
              />
            </h4>
            {balance
              .filter((balance) => balance.paymentMode === "Bank")
              .map((balance) => (
                <p key={balance.id}> ₹ {Number(balance.balance)}</p>
              ))}
          </div>

          <div className="col-lg-3 yellow">
            <h4>
              <input
                type="text"
                value="PayTm"
                readOnly
                onClick={displayOption}
                className="paymentHeading"
              />
            </h4>
            {balance
              .filter((balance) => balance.paymentMode === "PayTm")
              .map((balance) => (
                <p key={balance.id}>₹ {Number(balance.balance)}</p>
              ))}
          </div>

          <div className="col-lg-3 white">
            <h4>
              Add Account
              <FontAwesomeIcon icon={faPlus} className="ms-5 mt-3 plus" />
            </h4>
          </div>
          <p>
            <b>Note:-</b> Click on payment mode name for more actions
          </p>
        </div>
      </form>

      <div className=" container mt-2 mb-1 ">
        {showOptions && (
          <div className="row selectAll p-2">
            <div className="col-12 currentlySelected">
              <h3>
                Currently Selected Method is{" "}
                <b className="text-primary">{selectedPayment}</b>
              </h3>
            </div>
            <div className="col-12">
              <h3 onClick={hidedisplayOption}>Select All</h3>
            </div>
          </div>
        )}
      </div>
      <div className="container text-dark">{showOptions && <Options />}</div>
    </div>
  );
};

export default Payment;
