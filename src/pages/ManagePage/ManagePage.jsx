import React from "react";
import "./ManagePage.css";
import { auth } from "../../firebaseConfig";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
function ManagePage() {
  // useeffect to retirve the user data every time they hit the home page
  useEffect(() => {
    getData(() => {});
  });

  return (
    <div>
      <h3>Manage</h3>
    </div>
  );
}

export default ManagePage;
