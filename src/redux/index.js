import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import expenseReducer from "./expense";
import themeReducer from "./theme";
import paymentReducer from "./payment";
const store = configureStore({
  reducer: {
    auth: authReducer,
    expense: expenseReducer,
    theme: themeReducer,
    payment: paymentReducer,
  },
});

export default store;
