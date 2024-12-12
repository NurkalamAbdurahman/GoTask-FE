import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Dasboard from "./pages/dasboard/dasboard";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/Login";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dasboard" element={<Dasboard/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
