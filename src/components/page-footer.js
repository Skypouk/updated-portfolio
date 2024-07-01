import React from "react";
import { PageFooterHyperlink } from "./page-footer-hyperlink";
import main_logo from "assets/coding.png";

export const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-grid__section">
            <h1>Contact</h1>
            <div className="page-footer-grid__links">
              <PageFooterHyperlink>
                Issy les moulineaux, 92130
              </PageFooterHyperlink>
              <PageFooterHyperlink>
                bentaheraachraf@gmail.com
              </PageFooterHyperlink>
              <PageFooterHyperlink
                path={"https://www.linkedin.com/in/abentaher/"}
              >
                LinkedIn
              </PageFooterHyperlink>
            </div>
          </div>
        </div>
        <div className="page-footer-grid__info">
          <div className="page-footer-grid__section">
            <h1>Personal links</h1>
            <div className="page-footer-grid__links">
              <PageFooterHyperlink
                path={"https://www.linkedin.com/in/abentaher/"}
              >
                LinkedIn
              </PageFooterHyperlink>
              <PageFooterHyperlink path={"https://github.com/Skypouk/"}>
                Github
              </PageFooterHyperlink>

              <PageFooterHyperlink path={"https://leetcode.com/skypouk/"}>
                Leetcode
              </PageFooterHyperlink>
            </div>
          </div>
        </div>
        <div className="page-footer-grid__info">
          <div className="page-footer-grid__section">
            <h1>Career</h1>
            <div className="page-footer-grid__links">
              <PageFooterHyperlink path={"/xps#xp1"}>
                Data scientist CA
              </PageFooterHyperlink>
              <PageFooterHyperlink path={"/xps#xp2"}>
                Python developer SG
              </PageFooterHyperlink>
            </div>
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <img
              className="page-footer-brand__logo"
              src={main_logo}
              alt="Skypouk logo"
              width="20"
              height="22.22"
            />
            <PageFooterHyperlink path="/">Skypouk Inc</PageFooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
