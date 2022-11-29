import { legacy_createStore } from "redux";
// !핵심 state는 직접 변형(mutate)하는 게 아니라 새로운 object를 리턴함으로써 상태를 변경시킬 수 있다
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text, id) => {
  return {
    type: ADD_TODO,
    text,
    id,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};
const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: action.id };
      return [newToDoObj, ...state];
    case DELETE_TODO:
      const cleaned = state.filter((toDo) => toDo.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

const dipatchAddToDo = (text, id) => {
  store.dispatch(addToDo(text, id));
};

const dipatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dipatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const text = input.value;
  const id = Date.now();
  input.value = "";
  dipatchAddToDo(text, id);
};

form.addEventListener("submit", onSubmit);
