import Card from "../../component/card/card";
import "./main.scss";
import axios from "axios";
import { useState } from "react";

const Main = (props) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="main-bg"></div>
      <button
        onClick={() => {
          const shoesCopy = [...props.shoes];
          shoesCopy.sort((a, b) =>
            a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
          );
          props.setShoes(shoesCopy);
        }}
      >
        정렬
      </button>
      <div className="container">
        <div className="row">
          {props.shoes.map((a, i) => {
            return (
              <Card
                shoes={a}
                i={i + 1}
                key={(a, i)}
                latest={props.latest}
                setLatest={props.setLatest}
              />
            );
          })}
        </div>
      </div>
      {/* 로딩 */}
      {loading == true ? (
        <div className="alert alert-warning">로딩중</div>
      ) : null}
      {/* 더보기 */}
      {props.btnCount <= 3 ? (
        <button
          onClick={(e) => {
            setLoading(true);
            props.setBtnCount(props.btnCount + 1);
            axios
              .get(
                `https://codingapple1.github.io/shop/data${props.btnCount}.json`
              )
              .then((result) => {
                const shoesCopy = [...props.shoes, ...result.data];
                props.setShoes(shoesCopy);
                setLoading(false);
              })
              .catch(() => {
                console.log("failed");
                setLoading(false);
              });
          }}
        >
          더보기
        </button>
      ) : null}
    </>
  );
};

export default Main;
