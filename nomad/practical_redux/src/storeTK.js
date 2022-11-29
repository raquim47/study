import { legacy_createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");
// console.log(addToDo(), deleteToDo());

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      // console.log(action)
      return [{ text: action.payload.text, id: action.payload.id }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};
const store = legacy_createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};
export default store;
