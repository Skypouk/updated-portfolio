import React from "react";

export const PageFooterHyperlink = ({ children, path, target }) => {
  return (
    <a
      className="page-footer__hyperlink"
      href={path}
      target={target}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
