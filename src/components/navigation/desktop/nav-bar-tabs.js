import React from "react";
import { NavBarTab } from "./nav-bar-tab";

export const NavBarTabs = () => {
  return (
    <div className="nav-bar__tabs">
      <NavBarTab path="/" label="Home" />
      <NavBarTab path="/skills" label="Skills" />
      <NavBarTab path="/xps" label="Career" />
    </div>
  );
};
