import { connect } from "react-redux";
import { useParams } from "react-router-dom";
const DetailTK = ({ toDos }) => {
  console.log(toDos);
  const id = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  console.log(toDo);
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h3>Created at: {toDo?.id}</h3>
    </>
  );
};
function mapStateTopProps(state) {
  return { toDos: state };
}
export default connect(mapStateTopProps)(DetailTK);
