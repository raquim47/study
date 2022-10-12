import { useState } from "react";

function ToDosList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => setToDo(e.target.value);
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (!toDo) return;
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  // 삭제 기능
  const deleteBtn = (e) => {
    const targetItem = parseInt(e.target.id);
    setToDos((currentArray) =>
      currentArray.filter((item, i) => {
        return i !== targetItem;
      })
    );
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write you TODO"
        />
        <button>Add To Do</button>
      </form>
      {toDos.map((item, i) => (
        <li key={i}>
          {item}
          <button id={i} onClick={deleteBtn}>❌</button>
        </li>
      ))}
    </div>
  );
}

export default ToDosList;
