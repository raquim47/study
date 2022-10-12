const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const KEY_TODOS = "todos";

let toDos = [];

function deleteToDo(e) {
  const li = e.target.parentElement;
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  li.remove();

  localStorage.setItem(KEY_TODOS, JSON.stringify(toDos));
}

function paintToDo(e) {
  const li = document.createElement("li");
  li.id = e.id;
  const span = document.createElement("span");
  span.innerText = e.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function onToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };

  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  localStorage.setItem(KEY_TODOS, JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", onToDoSubmit);

const savedToDos = localStorage.getItem(KEY_TODOS);

if (savedToDos) {
  const parsedTodos = JSON.parse(savedToDos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintToDo);
}
