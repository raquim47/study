import { Routes,Route,Link,useNavigate,Outlet } from 'react-router-dom';
import { useState } from 'react';
// css
import "./reset.css";
// component
import Nav from "./components/Nav/Nav";
// route
import Main from "./router/Main/Main";
import Men from "./router/Men/Men";

function App() {
  const [navItemColor, setNavItemColor] = useState(0);
  const [userColor,setUserColor] = useState("");
  const [unmount, setUnmount] = useState(false);
  const [navIndex, setNavIndex] = useState();
  return (
    <div className="App">
      <Nav userColor={userColor} setUnmount={setUnmount} unmount={unmount} navIndex={navIndex} setNavIndex={setNavIndex}/>
      <Routes>
        <Route path="/" element={<Main setUserColor={setUserColor} unmount={unmount} setUnmount={setUnmount} setNavIndex={setNavIndex}/>}></Route>
        <Route path="/men" element={<Men setUserColor={setUserColor} setNavIndex={setNavIndex}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
