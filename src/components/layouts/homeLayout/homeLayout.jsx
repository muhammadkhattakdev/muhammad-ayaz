import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './style.css';
import Navbar from '../../pages/homepage/components/navbar/navbar';
import SecondaryNavbar from '../../pages/homepage/components/secondaryNavbar/secondaryNavbar';

const HomeLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Initialize theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Loading Screen Component
  const LoadingScreen = () => (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text gradient-text">MuhammadAyaz</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        
        <div className="loading-bars">
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
        </div>
        
        <div className="loading-text">
          <span className="loading-message">Crafting digital experiences...</span>
        </div>
      </div>
      
      {/* Background particles for loading */}
      <div className="loading-particles">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="loading-particle" 
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="home-layout">
      <Navbar />
      <SecondaryNavbar />
      
      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>
      
      {/* Scroll to top button */}
      <ScrollToTopButton />
      
      {/* Background decoration */}
      <div className="layout-background">
        <div className="bg-decoration bg-decoration-1"></div>
        <div className="bg-decoration bg-decoration-2"></div>
        <div className="bg-decoration bg-decoration-3"></div>
      </div>
    </div>
  );
};

// Scroll to Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M17 14L12 9L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default HomeLayout;