import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./component/nav/nav";

import Main from "./router/main/main";
import Detail from "./router/detail/detail";
import Cart from "./router/Cart/Cart";

import data from "./data";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [shoes, setShoes] = useState(data);
  const [btnCount, setBtnCount] = useState(2);
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);
  const [latest, setLatest] = useState([]);
  console.log(latest);
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              shoes={shoes}
              setShoes={setShoes}
              btnCount={btnCount}
              setBtnCount={setBtnCount}
              latest={latest}
              setLatest={setLatest}
            />
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>없는페이지임</div>} />
      </Routes>
    </div>
  );
}

export default App;
