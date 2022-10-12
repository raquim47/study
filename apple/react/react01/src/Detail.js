import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

const Detail = (props) => {
  const { id } = useParams();
  const findId = props.shoes.find((item) => item.id === parseInt(id));
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (isNaN(inputValue) == true) {
      alert('그러지마세요');
      setInputValue("");
    }
    // setTimeout(() => {
    //   setAlert(false);
    // }, 2000);
  }, [inputValue]);

  return (
    <div className="container">
      {alert && <div className="alert alert-warning">2초 후 사라짐</div>}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (findId.id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          ></input>
          <h4 className="pt-5">{findId.title}</h4>
          <p>{findId.content}</p>
          <p>{findId.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Detail;
