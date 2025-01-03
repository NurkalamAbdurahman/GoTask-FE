import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Dasboard from "./pages/dasboard/Dasboard";
import DasboardM from "./pages/dasboard/DasboardM";
import DasboardS from "./pages/dasboard/DasboardS";
import DasboardT from "./pages/dasboard/DasboardT";
import DasboardC from "./pages/dasboard/DasboardC";
import DasboardP from "./pages/dasboard/DasboardP";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dasboard" element={<Dasboard />} />
        <Route path="/Dasboard-Member" element={<DasboardM />} />
        <Route path="/Dasboard-Setting" element={<DasboardS />} />
        <Route path="/Dasboard-Table" element={<DasboardT />} />
        <Route path="/Dasboard-Calendar" element={<DasboardC/>} />
        <Route path="/Dasboard-Proyek" element={<DasboardP/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
