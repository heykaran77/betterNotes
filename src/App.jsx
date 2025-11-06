import React, { useContext } from "react";
// import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import NotesState from "./context/NotesState";
import { Toaster } from "sonner";
import Signup from "./components/Signup";

const App = () => {
  return (
    <div className="selection:text-orange-100 selection:bg-orange-400">
      <NotesState>
        <Toaster
          position="top-right"
          richColors
          closeButton
          offset={{ bottom: "12px", top: "96px", right: "12px" }}
          duration={2000}
        />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
      </NotesState>
    </div>
  );
};

export default App;
