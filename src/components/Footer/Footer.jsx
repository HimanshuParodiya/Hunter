import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__left">
        <div className="footerLeft__heading">Hunter</div>
        <div className="footerLeft__subHeading">
          Best Airdrop hunting platform
        </div>
      </div>
      <div className="footer__middle">
        <div className="footerMiddle__heading footer__heading">Quick links</div>
        <ul className="footer__ul">
          <li className="footer__li">
            <a href="#" className="footer__a">
              Pricing
            </a>
          </li>
          <li className="footer__li">
            <a href="#" className="footer__a">
              Terms & Conditions
            </a>
          </li>
          <li className="footer__li">
            <a href="#" className="footer__a">
              Privacy Policy
            </a>
          </li>
          <li className="footer__li">
            <a href="#" className="footer__a">
              FAQs
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__right ">
        <div className="footer__heading">Contact</div>
        <div className="footer__mediaLinks">
          <div className="footer__mediaLink footer__telegram">Telegarm</div>
          <div className="footer__mediaLink footer__email">Email</div>
          <div className="footer__mediaLink footer__twitter">Twitter</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
