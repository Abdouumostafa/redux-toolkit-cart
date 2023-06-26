import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    // anything + Reducer
    cart: cartReducer,
    modal: modalReducer,
  },
});
