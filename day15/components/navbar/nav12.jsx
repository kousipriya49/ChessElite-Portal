// TNavbar.jsx
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../../styles/TNavstyle.css";

const TNavbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="nav123bar">
     
      <h3>CHESS ACADEMY PORTAL AND ADMISSION...!</h3>
      <div onClick={handleClick} className="nav123-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? "nav123-links active" : "nav123-links"}>
        <li className="nav123-item">
          <Link to="/" className="nav123-link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="nav123-item">
          <Link to="/academy" className="nav123-link" onClick={closeMenu}>
            Academy
          </Link>
        </li>
        <li className="nav123-item">
          <Link to="/courses" className="nav123-link" onClick={closeMenu}>
            Courses
          </Link>
        </li>
        <li className="nav123-item">
          <Link to="/view" className="nav123-link" onClick={closeMenu}>
            Students form details
          </Link>
        </li>
        {/* Add other navigation links as needed */}
      </ul>
    </nav>
  );
};

export default TNavbar;
