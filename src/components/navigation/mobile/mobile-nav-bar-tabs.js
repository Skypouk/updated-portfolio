import React from "react";
import { MobileNavBarTab } from "./mobile-nav-bar-tab";

export const MobileNavBarTabs = ({ handleClick }) => {
  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab path="/" label="Home" handleClick={handleClick} />
      <MobileNavBarTab
        path="/skills"
        label="Skills"
        handleClick={handleClick}
      />
      <MobileNavBarTab path="/xps" label="Career" handleClick={handleClick} />
    </div>
  );
};
