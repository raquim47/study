import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },

  reducers: {
    // changeName(state) {
    //   return "john" + state;
    // },
    changeAge(state, action) {
      state.age += action.payload;
    },
  },
});

export const { changeAge } = user.actions;

export default user;
