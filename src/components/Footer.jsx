import React from "react";
import "./Footer.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__logo">
            <p>Logo</p>
          </div>
          <div className="footer__copyright">
            <h5>Copyright &copy;{year} All Rights Reserved.</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
