import { BrowserRouter as Router, Routes, Route } 
from "react-router-dom";
import HomeTK from "./../routes/HomeTK";
import DetailTK from "./../routes/DetailTK";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeTK />} />
        <Route path="/detail/:id" element={<DetailTK />} />
      </Routes>
    </Router>
  );
};

export default App;
