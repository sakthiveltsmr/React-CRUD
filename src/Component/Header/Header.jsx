import React from "react";
import { NavLink } from "react-router-dom";
import "../Component.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <input type="checkbox" id="check" />
        <label id="label" htmlFor="check">
          <span className="brand">
            <i className="fas fa-house-user"></i>
          </span>
        </label>
        <div className="headermove">
          <div className="navdiv">
            <NavLink
              exact
              to="/"
              className="navlink brand"
              activeClassName="activenavlink"
            >
              Users
            </NavLink>
          </div>
          <div className="navdiv">
            <NavLink
              to="/createuser"
              className="navlink"
              activeClassName="activenavlink"
            >
              Create User
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
