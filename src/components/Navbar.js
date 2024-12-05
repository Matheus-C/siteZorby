import React from "react";
import logo from "../images/logo.png"
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo ZorbyApp" />
      <ul className="nav-links">
        <i><li>Sobre</li></i>
        <i><li>Quem somos?</li></i>
        <i><li>Contato</li></i>
      </ul>
    </nav>
  );
}

export default Navbar;
