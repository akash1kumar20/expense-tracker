import React, { useEffect, useState } from "react";
import "./UpdateItem.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
const UpdateItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogIn = localStorage.getItem("token");
  useEffect(() => {
    if (!isLogIn) {
      alert("Please Login First!");
      navigate("/login");
    }
  }, []);
  const [amount, setAmount] = useState("");
  const [discritpion, setDiscription] = useState("");
  const [category, setCategory] = useState("");
  const [payment, setPayment] = useState("");
  const [id, setId] = useState(null);

  const emailValue = localStorage.getItem("email");
  let changeEmail;
  if (emailValue === null) {
    changeEmail = 0;
  } else {
    changeEmail = emailValue.replace("@", "").replace(".", "");
  }
  const update = async () => {
    const expense = {
      amount,
      discritpion,
      category,
      payment,
    };
    try {
      let res = await axios.put(
        `https://expense-tracker-887e6-default-rtdb.firebaseio.com/expense${changeEmail}/${id}.json`,
        expense
      );
      console.log(res);
      toast.success("Edit Successfully!", {
        theme: "dark",
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/expense");
      }, 2500);
    } catch (err) {
      console.log(err);
      toast.error("Please Try Again!", {
        theme: "dark",
        position: "top-center",
        autoClose: 2000,
      });
    }
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("expense"));
    setAmount(data.amount);
    setDiscription(data.discritpion);
    setCategory(data.category);
    setPayment(data.payment);
    setId(data.id);
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container updateBox">
        <div className="row headerRow ">
          <div className="col-3 ">
            <h3>Amount</h3>
          </div>
          <div className="col-3 ">
            <h3>Discription</h3>
          </div>
          <div className="col-3">
            <h3>Category</h3>
          </div>
          <div className="col-3">
            <h3>Pay From</h3>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-3 ">
            <h3>
              <input
                type="text"
                value={amount}
                className="valueRow"
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </h3>
          </div>
          <div className="col-3 ">
            <h3>
              <input
                type="text"
                value={discritpion}
                className="valueRow"
                onChange={(e) => setDiscription(e.target.value)}
                required
              />
            </h3>
          </div>
          <div className="col-3 ">
            <h3>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="Food" id="category" name="category">
                  Food
                </option>
                <option value="Shopping" id="category" name="category">
                  Shopping
                </option>
                <option value="Housing" id="category" name="category">
                  Housing
                </option>
                <option value="Transportaion" id="category" name="category">
                  Transportaion
                </option>
                <option value="Vehicle" id="category" name="category">
                  Vehicle
                </option>
                <option value="Investments" id="category" name="category">
                  Investments
                </option>
                <option value="Entertainment" id="category" name="category">
                  Entertainment
                </option>
              </select>
            </h3>
          </div>
          <div className="col-3 ">
            <h3>
              <select
                id="payment"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                required
              >
                <option value="Cash" id="payment" name="payment">
                  Cash
                </option>
                <option value="Bank" id="payment" name="payment">
                  Bank
                </option>
                <option value="PayTm" id="payment" name="payment">
                  PayTm
                </option>
              </select>
            </h3>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-1 me-2">
            <button className="btn btn-success btn-lg" onClick={update}>
              Update
            </button>
          </div>
          <div className="col-1 ms-2">
            <button
              className="btn btn-danger btn-lg"
              onClick={() => navigate("/expense")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateItem;
