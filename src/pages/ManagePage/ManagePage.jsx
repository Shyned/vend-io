import React from "react";
import "./ManagePage.css";
import { auth } from "../../firebaseConfig";

function ManagePage() {
  return (
    <div>{auth.currentUser && <h4>Welcome {auth.currentUser.email}</h4>}</div>
  );
}

export default ManagePage;
