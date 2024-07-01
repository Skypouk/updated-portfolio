import React from "react";
import { NavLink } from "react-router-dom";
import main_logo from "assets/coding.png";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <div className="nav-bar__brand__container">
          <img className="nav-bar__logo" src={main_logo} alt="Skypouk logo" />
          <h4>Skypouk</h4>
        </div>
      </NavLink>
    </div>
  );
};
