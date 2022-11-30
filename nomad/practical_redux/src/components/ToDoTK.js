import { connect } from "react-redux";
// import { actionCreators } from "../storeTK";
import { remove } from "../storeTK";
import { Link } from "react-router-dom";
const ToDoTK = ({ text, id, onBtnClick }) => {
  return (
    <li>
      <Link to={`/detail/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};
function mapStateToProps(dispatch, ownProps) {
  return {
    // onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}
export default connect(null, mapStateToProps)(ToDoTK);
