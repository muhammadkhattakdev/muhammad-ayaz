import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import './style.css';

const NotFoundPage = () => {
  return (
    <div className="notfound-wrapper">
      {/* Background Elements */}
      <div className="notfound-glow-orb notfound-glow-orb-1"></div>
      <div className="notfound-glow-orb notfound-glow-orb-2"></div>
      <div className="notfound-glow-orb notfound-glow-orb-3"></div>
      <div className="notfound-floating-glow notfound-floating-glow-1"></div>
      <div className="notfound-floating-glow notfound-floating-glow-2"></div>
      
      {/* Grid Pattern Background */}
      <div className="notfound-grid-pattern"></div>
      
      {/* Main Content */}
      <div className="notfound-content">
        <div className="notfound-error-code">
          <span className="notfound-404">404</span>
          <div className="notfound-glitch-effect">404</div>
        </div>
        
        <h1 className="notfound-title">
          Page Not Found
        </h1>
        
        <p className="notfound-description">
          The page you're looking for seems to have ventured into the digital void. 
          Let's get you back on track.
        </p>
        
        <div className="notfound-search-hint">
          <Search size={20} />
          <span>Perhaps you were looking for one of these?</span>
        </div>
        
        <div className="notfound-quick-links">
          <Link to="/portfolio" className="notfound-quick-link">
            <span className="quick-link-number">01</span>
            <span className="quick-link-text">Portfolio</span>
          </Link>
          <Link to="/services" className="notfound-quick-link">
            <span className="quick-link-number">02</span>
            <span className="quick-link-text">Services</span>
          </Link>
          <Link to="/contact" className="notfound-quick-link">
            <span className="quick-link-number">03</span>
            <span className="quick-link-text">Contact</span>
          </Link>
        </div>
        
        <div className="notfound-actions">
          <Link to="/" className="notfound-button primary">
            <Home size={20} />
            Back to Homepage
          </Link>
          <button onClick={() => window.history.back()} className="notfound-button secondary">
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;