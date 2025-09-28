import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Home from "./components/Home";
import NotesState from "./context/NotesState";
import { Toaster } from "sonner";

const App = () => {
  return (
    <div>
      <NotesState>
        <NavBar />
        <Toaster />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </NotesState>
    </div>
  );
};

export default App;
