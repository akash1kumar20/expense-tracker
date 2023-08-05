import React from "react";
import "./ExpenseForm.css";
import axios from "axios";
const ExpenseForm = () => {
  const expenseDetails = async (event) => {
    event.preventDefault();
    const expense = {
      amount: event.target.amount.value,
      discritpion: event.target.discription.value,
      category: event.target.category.value,
      payment: event.target.payment.value,
    };
    let emailValue = localStorage.getItem("userEmail");
    let changeEmail;
    if (emailValue === null) {
      changeEmail = 0;
    } else {
      changeEmail = emailValue.replace("@", "").replace(".", "");
    }

    try {
      let res = await axios.post(
        ` https://expense-tracker-887e6-default-rtdb.firebaseio.com/expense${changeEmail}.json`,
        expense
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container bg-info mt-3">
      <form onSubmit={expenseDetails}>
        <div className="row">
          <div className="col-lg-2 mt-3">
            <label htmlFor="amount">
              <h3>Amount:</h3>
            </label>
            <br />
            <input
              type="number"
              id="amount"
              name="amount"
              required
              min="0"
              placeholder="Amount in ₹ "
            ></input>
          </div>
          <div className="col-lg-4 mt-3">
            <label htmlFor="discription">
              <h3>Discription:</h3>
            </label>
            <br />
            <input
              type="text"
              id="discription"
              name="discription"
              required
              placeholder="Where you spend your money?"
            ></input>
          </div>
          <div className="col-lg-2 mt-3">
            <label htmlFor="discription">
              <h3>Category:</h3>
            </label>
            <br />
            <select id="category" required>
              <option
                value=""
                id="category"
                name="category"
                defaultValue
                hidden
              >
                Choose One
              </option>
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
          </div>
          <div className="col-lg-2 mt-3">
            <label htmlFor="discription">
              <h3>Pay Using:</h3>
            </label>
            <br />
            <select id="payment" required>
              <option value="" id="payment" name="payment" defaultValue hidden>
                Choose One
              </option>
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
          </div>
          <div className="col-lg-2 mt-5 ">
            <button
              className="btn btn-dark btn-md text-white expenseBtn"
              type="submit"
            >
              Add Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
