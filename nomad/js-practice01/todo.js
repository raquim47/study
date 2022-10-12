const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

const KEY_TODOS = 'todos';

let toDos = [];

function saveToDo() {
  localStorage.setItem(KEY_TODOS, JSON.stringify(toDos));
}



function handelToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const currentUsername = localStorage.getItem('username');
  const newtoDoObj = {
    user: currentUsername,
    text: newToDo,
    id: Date.now(),
  }

  toDos.push(newtoDoObj);

  if (currentUsername === newtoDoObj.user) {
    paintToDo(newtoDoObj);
  }
  saveToDo();
}

function paintToDo(e) {
  const li = document.createElement('li');
  li.id = e.id;
  const span = document.createElement('span');
  const button = document.createElement('button');
  span.innerText = e.text;
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  toDos = toDos.filter(item => item.id !== parseInt(li.id));
  li.remove();
  saveToDo();
}

toDoForm.addEventListener('submit', handelToDoSubmit);

const savedToDos = localStorage.getItem(KEY_TODOS);

if (savedToDos) {

  let parsedToDo = JSON.parse(savedToDos);
  toDos = parsedToDo;
  parsedToDo = parsedToDo.filter(item => item.user === localStorage.getItem('username'));
  parsedToDo.forEach(paintToDo);
}