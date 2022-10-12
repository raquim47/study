import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

const cartData = createSlice({
  name: "cartData",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    counter(state, action) {
      const idNum = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[idNum].count++;
    },
    addCart(state, action) {
      state.push(action.payload);
    },
    deleteCart(state, action) {
      const deleteItem = state.filter(
        (current) => current.id !== action.payload
      );
      return deleteItem;
      // const deleteItem = state.filter((current) => {
      //   current.id !== action.payload;
      // });
      // return deleteItem;
    },
  },
});
export const { counter, addCart, deleteCart } = cartData.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cartData: cartData.reducer,
  },
});
