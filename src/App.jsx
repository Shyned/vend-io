// imported stylesheet
import "./App.css";
// import for firebase
// react
import React from "react";
// import pages
import ManagePage from "./pages/ManagePage/ManagePage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
// import components
import Navbar from "./Components/Navbar/Navbar";
// imported hooks

// react routes imports
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<ManagePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
