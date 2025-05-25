import React, { useEffect, useRef } from 'react';
import './style.css';
import ayazImg from "../../../../../static/ayaz.png";



const Hero = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (circleRef.current) {
        const circle = circleRef.current;
        const rect = circle.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * 0.1;
        const deltaY = (e.clientY - centerY) * 0.1;
        
        circle.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Side - Profile Image */}
        <div className="hero-image-section">
          <div className="profile-image-container">
              <img src={ayazImg} alt="" />            
            {/* Floating Badge */}
            <div className="developer-badge" ref={circleRef}>
              <div className="badge-content">
                <span className="badge-text">WEBFLOW DEVELOPER</span>
                <div className="badge-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-subtitle">
              DESIGNER & WEBFLOW EXPERT
            </div>
            
            <h1 className="hero-title">
              Agency-level web development services at{' '}
              <span className="gradient-text">freelancer rates</span>
            </h1>
            
            <p className="hero-description">
              My mission is to design and develop a website that you and your audience love
              <span className="heart-icon">♡</span>.
            </p>
            
            <div className="hero-cta">
              <button className="whatsapp-btn">
                <span className="btn-text">Happy to chat on Whatsapp</span>
                <div className="whatsapp-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.472 14.382C17.059 14.618 16.717 14.757 16.244 14.618C15.772 14.479 14.827 14.006 13.882 13.078C12.937 12.15 12.464 11.205 12.325 10.733C12.186 10.26 12.325 9.918 12.561 9.505C12.797 9.092 13.033 8.679 13.269 8.266C13.505 7.853 13.741 7.44 13.977 7.027C14.213 6.614 14.449 6.201 14.685 5.788C14.921 5.375 15.157 4.962 15.393 4.549C15.629 4.136 15.865 3.723 16.101 3.31C16.337 2.897 16.573 2.484 16.809 2.071C17.045 1.658 17.281 1.245 17.517 0.832C17.753 0.419 17.989 0.006 18.225 -0.407" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 15.999C21 16.5 20.9 17 20.7 17.5C20.5 18 20.2 18.4 19.8 18.8C19.4 19.2 19 19.5 18.5 19.7C18 19.9 17.5 20 17 20C16.1 20 15.1 19.8 14 19.4C12.9 19 11.8 18.5 10.7 17.9C9.6 17.3 8.6 16.6 7.7 15.8C6.8 15 6.1 14.2 5.5 13.3C4.9 12.4 4.4 11.5 4 10.5C3.6 9.5 3.4 8.5 3.4 7.5C3.4 7 3.5 6.5 3.7 6C3.9 5.5 4.2 5.1 4.6 4.7C5 4.3 5.4 4 5.9 3.8C6.4 3.6 6.9 3.5 7.4 3.5H8.4C8.7 3.5 9 3.6 9.2 3.8C9.4 4 9.5 4.3 9.6 4.6L10.4 7.4C10.5 7.7 10.5 8 10.4 8.2C10.3 8.4 10.1 8.6 9.9 8.8L9.1 9.6C9 9.7 9 9.8 9 9.9C9 10 9.1 10.1 9.2 10.2C9.5 10.7 10 11.3 10.6 11.9C11.2 12.5 11.8 13 12.3 13.3C12.4 13.4 12.5 13.5 12.6 13.5C12.7 13.5 12.8 13.5 12.9 13.4L13.7 12.6C13.9 12.4 14.1 12.2 14.3 12.1C14.5 12 14.8 12 15.1 12.1L17.9 12.9C18.2 13 18.5 13.1 18.7 13.3C18.9 13.5 19 13.8 19 14.1V15.1C19 15.6 18.9 16.1 18.7 16.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="hero-background">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="floating-elements">
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
          <div className="floating-dot dot-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;