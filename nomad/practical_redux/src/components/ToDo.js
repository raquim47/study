import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
const ToDo = ({ text, id, onBtnClick }) => {
  return (
    <li>
      <Link to={`/detail/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};
function mapStateToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}
export default connect(null, mapStateToProps)(ToDo);
