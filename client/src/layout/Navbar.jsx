import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/layout/Navbar.css";
import Logo from "/PlaycompLogo_Color.png";
import Linkedin from "/LinkedinLogo.png";

function Navbar() {
  return (
    <header className="Navbar">
      <nav>
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
        </Link>
        <ul>
          <li>
            <NavLink to="/" className="home">
              <h2>HOME</h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="about"
            >
              <h2>ABOUT</h2>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resources"
              className="resources"
            >
              <h2>RESOURCES</h2>
            </NavLink>
          </li>

          <li>
            <NavLink to="/faqs" className="faqs">
              <h2>FAQS</h2>
            </NavLink>
          </li>
        </ul>

        <a
          target="_blank"
          rel="noreferrer"
          className="logo2"
          href="https://www.linkedin.com/company/play-comp/"
        >
          {" "}
          <img src={Linkedin} alt="logo" />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
