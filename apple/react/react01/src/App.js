import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Detail from "./Detail";
import data from "./data";
import axios from "axios";
let comWord = [];

fetch("krdict.korean.go.kr/api/search?key=E4707E01A33F395A8F5427ACF97309D2&q=가&advanced=y&sort=popular&method=start&letter_s=3&letter_e=3&pos=1&num=10")
  .then((res) => res.text())
  .then((data) => {
    const parser = new DOMParser();
    const parsedData = parser.parseFromString(data, "text/xml");
    const item = parsedData.getElementsByTagName("item");

    Array.from(item).forEach((item) =>
      comWord.push(item.getElementsByTagName("word")[0].childNodes[0].nodeValue)
    );
    comWord = comWord;
    console.log(comWord);
  });


const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="col-md-4"
      onClick={() => {
        navigate(`/detail/${props.shoes[props.i].id}`);
      }}
    >
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.shoes[props.i].id + 1) +
          ".jpg"
        }
        alt="img"
        width="80%"
      />
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
      <p>{props.shoes[props.i].price}</p>
    </div>
  );
};


function App() {
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();
  const [btnCount, setBtnCount] = useState(2);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            home
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/detail/0");
              }}
            >
              detail
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <button
                onClick={() => {
                  const copy = [...shoes];
                  copy.sort((a, b) =>
                    a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
                  );
                  setShoes(copy);
                }}
              >
                상품정렬
              </button>
              <div className="container">
                <div className="row">
                  {shoes.map((item, i) => {
                    return <Card shoes={shoes} i={i} key={i} />;
                  })}
                </div>
              </div>
              {loading == true ? (
                <div className="alert alert-warning">로딩중</div>
              ) : null}
              {btnCount <= 3 ? (
                <button
                  onClick={() => {
                    setLoading(true);
                    setBtnCount(btnCount + 1);
                    axios
                      .get(
                        `https://codingapple1.github.io/shop/data${btnCount}.json`
                      )
                      .then((result) => {
                        const copy = [...shoes, ...result.data];
                        setShoes(copy);
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
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}>
          <Route path="one" element={<div>디테일원이야</div>} />
          <Route path="two" element={<div>디테일투야</div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지야</div>} />
      </Routes>
    </div>
  );
}
export default App;
