// imported stylesheet
import "./App.css";
// import for firebase
import { auth } from "./firebaseConfig";
import { onAuthStateChanged, updateCurrentUser } from "firebase/auth";
// react
import React, { useState } from "react";
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
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <div>
      <Navbar />
      {user && <p>{user.email}</p>}
      <Routes>
        <Route path="/" element={<ManagePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
