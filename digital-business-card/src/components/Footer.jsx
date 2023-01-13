import React from "react";
import "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      {/* FACEBOOK */}
      <a href="https://www.facebook.com/Denkee/" target="_blank">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4494/4494475.png"
          alt="facebook"
        />
      </a>
      {/* INSTAGRAM */}
      <a href="https://www.instagram.com/dennisbyberg/" target="_blank">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
          alt="instagram"
        />
      </a>
      {/* TWITTER */}
      <a href="https://github.com/DennisByberg" target="_blank">
        <img
          src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
          alt=""
        />
      </a>
    </footer>
  );
};

export default Footer;
