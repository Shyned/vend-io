import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <section className="w-1/2">
      <nav className="flex bg-red-400">
        <Link to="/">Manage</Link>
        {auth.currentUser ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </section>
  );
}
