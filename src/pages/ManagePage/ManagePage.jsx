import React from "react";
import "./ManagePage.css";
import { auth } from "../../firebaseConfig";

function ManagePage() {
  return (
    <div>
      {auth.currentUser && <h4>Welcome {auth.currentUser.email}</h4>}
      <h3>manage</h3>
    </div>
  );
}

export default ManagePage;
