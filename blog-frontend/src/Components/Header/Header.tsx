'use client'
import React, { useState } from 'react';
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <div className="left-side">
        <div className="logo">
          <h2>UNTITLE</h2>
        </div>
        <div className={`link-item ${isMenuOpen ? "menu-open" : ""}`}>
          <ul className="item">
            <li>Home</li>
            <li>Blog</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
      <div className="right-side">
        <div className="buttons">
          <button className="login">Log in</button>
          <button className="signup">Sign up</button>
        </div>
      </div>
      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
      
      
      </div>
    </div>
  );
};

export default Header;
