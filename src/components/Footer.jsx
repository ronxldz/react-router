import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/green">Green</Link>
      <Link to="/yellow">Yellow</Link>
    </footer>
  );
}

export default Footer;
