import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <div className="header__logo">
            <p>Logo</p>
          </div>
          <nav>
            <ul className="header__navbar">
              <NavLink to="/" exact activeClassName="active" className="link">
                Home
              </NavLink>
              <NavLink
                to="/Gallery"
                exact
                activeClassName="active"
                className="link"
              >
                Gallery
              </NavLink>
              <NavLink
                to="/Services"
                exact
                activeClassName="active"
                className="link"
              >
                Services
              </NavLink>
              <NavLink
                to="/Contact"
                exact
                activeClassName="active"
                className="link"
              >
                Contact us
              </NavLink>
              <NavLink
                to="/About"
                exact
                activeClassName="active"
                className="link"
              >
                About us
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
