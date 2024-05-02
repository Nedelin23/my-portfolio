import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>About me</li>
        <li>Projects</li>
        <li>Education</li>
        <li>Certificates</li>
        <li>Contacts</li>
        <li>CV</li>
      </ul>
      <button className="burger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </nav>
  );
}

export default Navbar;
