import { legacy_createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text, id) => {
  return {
    type: ADD,
    text,
    id,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};
const store = legacy_createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo
}
export default store;
