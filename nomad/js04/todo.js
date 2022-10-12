const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';
// const toDos = [];
let toDos = [];
// localStorage는 array를 저장할 수 없음. 오직 string
// 때문에 toDos를 string으로 바꿔서 localStorage에 집어넣는다->JSON.stringify()
// 그 string을 다시 object로 불러오기 -> JSON.parse()
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function deleteToDo(event) {
  const li = event.target.parentElement;
  // 이벤트 타켓의 부모. -> 클릭된 button의 li
  toDos = toDos.filter(item => item.id !== parseInt(li.id));
  // li.id는 string, item.id는 number
  li.remove();
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span');
  const button = document.createElement('button');
  span.innerText = newToDo.text;
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
  toDoInput.value = "";
  
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// savedToDos !== null
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

// filter 함수를 이용해서 array의 지우고 싶은 item만 제외하고 새 array를 만들자
// 카톡방 안 나가는 녀석 때문에 새로 파서 초대함

// function sexyFilter(){
//  return true;
// }
// [1,2,3,4].filter(sexyFilter);
// 새 array에서 1,2,3,4를 포함하고 싶다면 sexyFilter 함수는 반드시 true를 리턴해야한다. false를 리턴하면 그 item은 새 array에 포함되지 않음