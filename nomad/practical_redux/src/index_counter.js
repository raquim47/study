// 1. simple counter with vanila JS

// const add = document.querySelector("#add");
// const minus = document.querySelector("#minus");
// const number = document.querySelector("#number");

// let count = 0; // -> data가 바뀌는 지점 : state
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count++;
//   updateText();
// };

// const handleMinus = () => {
//   count--;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

// 2.
// createStore -> legacy_createStore
import { legacy_createStore } from "redux";
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("#number");
// reducer : 이전 상태와 동작을 받아 새 상태를 리턴하는 함수
// reducer에서 data를 변경하는 방법 -> action
const ADD = "ADD"
const MINUS = "MINUS"
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
const countStore = legacy_createStore(countModifier);
//* subscribe : store의 변화 감지
const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);
//* dispatch : 동작 발생
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
