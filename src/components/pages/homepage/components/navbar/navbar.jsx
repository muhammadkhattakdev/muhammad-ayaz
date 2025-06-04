import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Menu, X, ChevronDown } from 'lucide-react';
import "./style.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside mobile menu and not on toggle button
      const mobileMenu = document.querySelector('.mobile-menu-overlay');
      const toggleButton = document.querySelector('.mobile-menu-toggle');
      
      if (isMobileMenuOpen && 
          mobileMenu && 
          !mobileMenu.contains(event.target) && 
          toggleButton && 
          !toggleButton.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listener with a slight delay to avoid conflicts
    if (isMobileMenuOpen) {
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 100);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Toggle mobile menu clicked, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(prev => !prev);
    setIsDropdownOpen(false); // Close dropdown when opening mobile menu
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMobileMenu}>SoftRanch</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links desktop-only">
          <Link to="/portfolio" className="navbar-link">Portfolio</Link>
          
          <div className="navbar-dropdown">
            <button 
              className="navbar-link dropdown-toggle"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
            >
              Go to 
              <ChevronDown 
                size={16} 
                className={`dropdown-arrow ${isDropdownOpen ? 'rotated' : ''}`}
              />
            </button>
            
            <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              <Link to="/contact" className="dropdown-item">Contact</Link>
              <Link to="/blog" className="dropdown-item">Blog</Link>
              <Link to="/pages" className="dropdown-item">Pages</Link>
            </div>
          </div>
        </div>
        
        {/* Desktop Social Icons */}
        <div className="navbar-social desktop-only">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <Linkedin size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <Instagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <Facebook size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle mobile-only"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          type="button"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <div className="mobile-nav-links">
              <Link to="/portfolio" className="mobile-nav-link" onClick={closeMobileMenu}>
                Portfolio
              </Link>
              <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
                Contact
              </Link>
              <Link to="/blog" className="mobile-nav-link" onClick={closeMobileMenu}>
                Blog
              </Link>
              <Link to="/pages" className="mobile-nav-link" onClick={closeMobileMenu}>
                Pages
              </Link>
            </div>
            
            <div className="mobile-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mobile-social-icon linkedin" onClick={closeMobileMenu}>
                <Linkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mobile-social-icon instagram" onClick={closeMobileMenu}>
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mobile-social-icon facebook" onClick={closeMobileMenu}>
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;