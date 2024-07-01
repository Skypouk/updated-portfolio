import React from "react";
import { NavBarBrand } from "./nav-bar-brand";
import { NavBarTabs } from "./nav-bar-tabs";

export const NavBar = () => {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <NavBarBrand />
        <NavBarTabs />
      </nav>
    </div>
  );
};
