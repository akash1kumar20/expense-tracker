import { createSlice } from "@reduxjs/toolkit";
const paymentState = {
  mainForm: null,
  paymentForm: null,
  paymentMode: "",
  balance: "",
  paymentItems: [],
};
const paymentSlice = createSlice({
  name: "payment",
  initialState: paymentState,
  reducers: {
    addBalance(state, action) {
      const newItem = action.payload;
      const alreadyPresentRecord = state.paymentItems.find(
        (item) => item.paymentMode === newItem.paymentMode
      );
      if (!alreadyPresentRecord) {
        state.paymentMode = action.payload.paymentMode;
        state.balance = action.payload.balance;
        state.paymentItems.push({
          paymentMode: state.paymentMode,
          balance: state.balance,
        });
      } else {
        alreadyPresentRecord.balance = action.payload.balance;
      }
    },
    updateBalance(state, action) {
      state.paymentMode = action.payload.payment;
      state.balance = state.balance - action.payload.amount;
    },
    paymentForm(state, action) {
      state.paymentForm = action.payload;
    },
    mainForm(state, action) {
      state.mainForm = action.payload;
    },
  },
});

export const paymentAction = paymentSlice.actions;
export default paymentSlice.reducer;
