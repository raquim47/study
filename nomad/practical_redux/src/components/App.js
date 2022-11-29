import { BrowserRouter as Router, Routes, Route } 
from "react-router-dom";
import HomeTK from "./../routes/HomeTK";
import Detail from "./../routes/Detail";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeTK />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
