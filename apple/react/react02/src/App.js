import "./reset.scss";
import "./App.scss";
// Component
import Nav from "./components/nav/nav";

// Route
import Main from "./router/main/main";
import data from "./data.js";
import { Component, useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

// navbar
function Product() {
  return (
    <div className="product">
      <div className="product__img">
        <img src={process.env.PUBLIC_URL + "/img/men-top01.jpg"} />
      </div>
      <em className="product__cate">Top</em>
      <h4>FAKE LEATHER MIX T-SHIRTS_GY</h4>
      <strong>$3980</strong>
    </div>
  );
}

function App() {
  const [clothes] = useState(data);
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1
        className="logo"
        onClick={() => {
          navigate("./");
        }}
      >
        <a href="#">Cozy</a>
      </h1>
      <Nav navigate={navigate} />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/men"
          element={
            <>
              <div className="product-category">
                <h2>MEN</h2>
                <ul>
                  <li className="active">TOP</li>
                  <li>OUTER</li>
                  <li>PANTS</li>
                </ul>
              </div>
              <div className="product-container">
                <div className="option">
                  <strong className="option__total">Total</strong>
                  <ul className="option__sort">
                    <li>New</li>
                    <li>Name</li>
                    <li>Price</li>
                  </ul>
                </div>
              </div>
              <Product />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
