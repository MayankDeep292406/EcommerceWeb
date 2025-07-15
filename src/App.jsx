// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Component/NavBar/NavBar";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Products from "../ShoppingCart/Products"; // ✅ FIXED PATH

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
