// imported stylesheet
import "./App.css";
// import for firebase
import { auth , database } from "./firebaseConfig";
import { onAuthStateChanged, updateCurrentUser } from "firebase/auth";
import { collection , addDoc } from "firebase/firestore";
// react
import React, { useState } from "react";
// import pages
import ManagePage from "./pages/ManagePage/ManagePage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import HomePage from "./pages/HomePage/HomePage";
// import components
import Navbar from "./Components/Navbar/Navbar";

import PrivateRoute from "./utils/PrivateRoute";

// react routes imports
import { Routes, Route } from "react-router-dom";

function App() {
  const [hasUser, setHasUser] = useState(false);
  const [user, setUser] = useState({});
  const collectionRef =  collection(database , "user")

const handlesubmit = () =>{
  addDoc(collectionRef, {email:database.email})
}

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    user ? setHasUser(true) : setHasUser(false);
  });

  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route element={<PrivateRoute hasUser={hasUser} />}>
          <Route path="/manage" element={<ManagePage />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
