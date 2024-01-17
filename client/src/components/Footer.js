import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>© Copyright Almino</p>
      <Link to="/about">Sobre o BIA</Link>
    </footer>
  );
};

export default Footer;
