import "./SignUp.css";
import React from "react";
import SignUpUser from "../../Components/SignUpUser/SignUpUser";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <section>
      <div>
        <SignUpUser />
      </div>

      <Link to="/login">Already a user ?</Link>
    </section>
  );
}
