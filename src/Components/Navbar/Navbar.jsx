import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const logout = async () => {};
  return (
    <section className="w-1/2">
      <nav className="flex bg-red-400">
        <Link to="/">Manage</Link>
        <Link to="/login">Login</Link>
      </nav>
    </section>
  );
}
