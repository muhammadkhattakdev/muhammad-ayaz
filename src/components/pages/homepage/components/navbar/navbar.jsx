import React, { useState, useEffect } from 'react';
import './style.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-symbol">∞</span>
          <span className="logo-text">MuhammadAyaz</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-nav">
          <a href="#home" className="nav-link">Digital Marketing</a>
          
          {/* Status Indicator */}
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span className="status-text">Available for work</span>
          </div>

          {/* Language Selector */}
          <div className="language-selector">
            <span className="language-text">EN</span>
            <svg className="language-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <a href="#home" className="mobile-nav-link" onClick={toggleMobileMenu}>
            Digital Marketing
          </a>
          
          <div className="mobile-status">
            <div className="status-dot"></div>
            <span>Available for work</span>
          </div>

          <div className="mobile-language">
            <span>EN</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;