import { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "./../components/ToDo";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");
  const onChange = ({ target: { value } }) => {
    setText(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    const id = Date.now();
    addToDo(text, id);
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id}/>
        ))}
      </ul>
    </>
  );
};
// mapStateToProps redux state로부터 home(component)에 prop을 전달
function mapStateToProps(state) {
  return { toDos: state };
}
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text, id) => dispatch(actionCreators.addToDo(text, id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// connect는 여전히 작동하며 React-Redux 8.x에서 지원되지만 기본적으로 hooks API인 useSelector를 사용하는 것이 좋다
