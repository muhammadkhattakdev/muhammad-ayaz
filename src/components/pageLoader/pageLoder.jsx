import React from 'react';
import './style.css';

const PageLoader = () => {
  return (
    <div className="page-loader-wrapper">
      <div className="page-loader-backdrop"></div>
      <div className="page-loader-glow"></div>
      
      <div className="page-loader-content">
        <div className="page-loader-logo">
          <span className="logo-text">SoftRanch</span>
          <div className="logo-underline"></div>
        </div>
        
        <div className="page-loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        
        <div className="page-loader-text">
          <span className="loading-text">Loading</span>
          <span className="loading-dots">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;