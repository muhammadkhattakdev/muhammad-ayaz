import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const [yearsCount, setYearsCount] = useState(4);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const counterRef = useRef(null);

  // Skills/Technologies with icons
  const skills = [
    { name: 'Django', icon: '🐍', position: { top: '15%', left: '20%' }, delay: 0 },
    { name: 'React', icon: '⚛️', position: { top: '25%', right: '15%' }, delay: 0.2 },
    { name: 'Node.js', icon: '💚', position: { bottom: '30%', left: '25%' }, delay: 0.4 },
    { name: 'MongoDB', icon: '🍃', position: { bottom: '20%', right: '20%' }, delay: 0.6 },
    { name: 'Docker', icon: '🐳', position: { top: '45%', left: '10%' }, delay: 0.8 },
    { name: 'PostgreSQL', icon: '🐘', position: { top: '35%', right: '8%' }, delay: 1.0 },
    { name: 'Client-First', icon: '👥', position: { bottom: '45%', left: '8%' }, delay: 1.2 },
    { name: 'Fast Delivery', icon: '⚡', position: { bottom: '15%', right: '12%' }, delay: 1.4 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounter();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startCounter = () => {
    let current = 4;
    const target = 10;
    const increment = 1;
    const duration = 2000; // 2 seconds
    const steps = target - current;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      setYearsCount(current);
      
      if (current >= target) {
        clearInterval(timer);
      }
    }, stepDuration);
  };

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="experience-container">
        {/* Background Elements */}
        <div className="experience-background">
          <div className="bg-blur bg-blur-1"></div>
          <div className="bg-blur bg-blur-2"></div>
          <div className="bg-blur bg-blur-3"></div>
          <div className="bg-blur bg-blur-4"></div>
        </div>

        {/* Main Content */}
        <div className="experience-content">
          {/* Animated Circles with Globe */}
          <div className="circles-container">
            {/* Outer Circle with Dotted Border */}
            <div className="circle-outer">
              <div className="circle-dots"></div>
              
              {/* Rotating Globe */}
              <div className="globe-orbit">
                <div className="globe-container">
                  <svg className="globe-icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 12c0-4.418 1.79-8 4-8s4 3.582 4 8-1.79 8-4 8-4-3.582-4-8z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Inner Circle */}
            <div className="circle-inner"></div>

            {/* Center Content */}
            <div className="center-content">
              <div className={`years-counter ${isVisible ? 'animate' : ''}`} ref={counterRef}>
                <span className="years-number">{yearsCount}</span>
                <span className="years-plus">+</span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className={`main-title ${isVisible ? 'animate' : ''}`}>
            <h2>
              <span className="title-line-1">YEARS OF</span>
              <span className="title-line-2">EXPERIENCE IN</span>
              <span className="title-line-3 gradient-text">FULL-STACK DEVELOPMENT</span>
            </h2>
          </div>

          {/* Floating Skills */}
          <div className="floating-skills">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`skill-badge ${isVisible ? 'animate' : ''}`}
                style={{
                  ...skill.position,
                  animationDelay: `${skill.delay}s`
                }}
              >
                <div className="skill-content">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Particles */}
          <div className="floating-particles">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Bottom Arrow Indicator */}
        <div className={`scroll-indicator ${isVisible ? 'animate' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Experience;