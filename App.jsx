import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./components/preloader";
import Home from "./components/home";
import Trending from "./components/trending";
import About from "./components/About";
import Allnews from "./components/allnews";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Preloader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/about" element={<About />} />
        <Route path="/allnews" element={<Allnews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
export default App;
