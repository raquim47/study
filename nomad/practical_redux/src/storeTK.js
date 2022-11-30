import { legacy_createStore } from "redux";
import {
  // createAction,
  // createReducer,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// 1.

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload.text, id: action.payload.id }, ...state];
//     case deleteToDo.type:
//       // add는 객체 {text, id} delete는 id
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// 2.
// createReducer 두 가지 선택지
// 1) state를 직접 변형(mutate) // redux toolkit이 대신 새로운 state를 생성해준다
// 2) 새로운 state를 return // 새로운 state를 return 한다면? 그대로 반영
// 주의할 점!!! 변형한 state(새로운 state가 아닌)를 return하면 에러
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload.text, id: action.payload.id });
//   },
//   [deleteToDo]: (state, action) => {
//     return state.filter((toDo) => toDo.id !== action.payload);
//   },
// });

// 3.
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload.text, id: action.payload.id });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

// const store = legacy_createStore(reducer);
// const store = configureStore({ reducer: toDos.reducer });

// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };

export const { add, remove } = toDos.actions;
export default configureStore({ reducer: toDos.reducer });
