import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/CustomNavbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Event from "./Pages/Event/Event";
import Contact from "./Pages/Contact/Contact";
import Register from "./Pages/Login/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
