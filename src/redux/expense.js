import { createSlice } from "@reduxjs/toolkit";
const expenseInitialState = {
  expenses: [],
  totalAmount: 0,
};
const expenseSlice = createSlice({
  name: "expense",
  initialState: expenseInitialState,
  reducers: {
    setExpense(state, action) {
      state.expenses = action.payload;
      state.totalAmount = action.payload.reduce(
        (total, expense) => total + Number(expense.amount),
        0
      );
      //   console.log("setExpense");
      //   console.log("expense", state.expenses);
      //   console.log("totalAmount", state.totalAmount);
    },
    addExpense(state, action) {
      state.expenses.push(action.payload);
      state.totalAmount += Number(action.payload.amount);
      //   console.log("addExpense");
      //   console.log("expense", state.expenses);
      //   console.log("totalAmount", state.totalAmount);
    },
  },
});

export const expenseAction = expenseSlice.actions;
export default expenseSlice.reducer;
