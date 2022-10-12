import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  return (
    <div
      className="col-md-4"
      onClick={() => {
        props.latest.push(props.shoes.id);
        // props.setLatest(addLatest);
        localStorage.setItem("watched", JSON.stringify(props.latest));
        navigate("/detail/" + props.shoes.id);
      }}
    >
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.shoes.id + 1) +
          ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default Card;
