import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    // <div className="header">
    <header className="header">
      <a href="/" className="link">
        <FontAwesomeIcon icon={faDog} />
        Pet Sitter
      </a>
      <ul className="nav ms-auto">
        <li className="nav-item">
          <a href="/home" className="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/login" className="nav-link">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a href="/signup" className="nav-link">
            Sign up
          </a>
        </li>

        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
      </ul>
    </header>
    // </div>
  );
};

export default Header;
