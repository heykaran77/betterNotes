import React from "react";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default App;
