import React from "react";
import "./ManagePage.css";
import { auth } from "../../firebaseConfig";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
function ManagePage() {
  return (
    <div>
      <h3>Manage</h3>
    </div>
  );
}

export default ManagePage;
