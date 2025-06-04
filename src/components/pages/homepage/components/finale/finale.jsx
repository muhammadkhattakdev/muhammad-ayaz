import React, { useState, useEffect } from 'react';
import './style.css';
import { ArrowRight, Mail, Phone, Sparkles } from 'lucide-react';

const Finale = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = ['Amazing?', 'Extraordinary?', 'Phenomenal?', 'Revolutionary?'];
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setTypedText(currentWord.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setTypedText(currentWord.substring(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(deleteInterval);
              setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
          }, 100);
        }, 2000);
      }
    }, 150);
    
    return () => clearInterval(typeInterval);
  }, [currentWordIndex]);

  return (
    <>
      <section className="finale-section">
        <div className="dynamic-background">
          <div className="grid-pattern"></div>
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i}`}></div>
            ))}
          </div>
        </div>
        
        <div 
          className="magnetic-cursor" 
          style={{
            left: mousePosition.x - 10,
            top: mousePosition.y - 10,
          }}
        ></div>
        
        <div className="finale-container">
          <div className="finale-content">
            <div className="text-stack">
              <h1 className="finale-title-line line-1">
                <span className="word-reveal">Ready</span>
                <span className="word-reveal">to</span>
                <span className="word-reveal">Build</span>
              </h1>
              
              <h1 className="finale-title-line line-2">
                <span className="word-reveal glitch-text">Something</span>
              </h1>
              
              <h1 className="finale-title-line line-3">
                <span className="typewriter-text">{typedText}</span>
                <span className="cursor-blink">|</span>
              </h1>
            </div>
            
            <div className="subtitle-container">
              <Sparkles className="sparkle-icon left" size={24} />
              <p className="finale-subtitle">
                Let's transform your wildest ideas into digital masterpieces that 
                <span className="highlight-word"> revolutionize </span> 
                entire industries.
              </p>
              <Sparkles className="sparkle-icon right" size={24} />
            </div>
            
            <div className="finale-actions">
              <button className="finale-button magnetic-element">
                <span className="button-bg"></span>
                <span className="button-content">
                  <span className="button-text">Launch Your Vision</span>
                  <ArrowRight size={24} className="button-arrow" />
                </span>
                <div className="button-particles">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className={`btn-particle btn-particle-${i}`}></div>
                  ))}
                </div>
              </button>
              
              <div className="contact-modern">
                <div className="contact-card">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">Drop us a line</span>
                    <span className="contact-value">hello@SoftRanch.com</span>
                  </div>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">Give us a call</span>
                    <span className="contact-value">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="holographic-elements">
            <div className="holo-ring ring-1"></div>
            <div className="holo-ring ring-2"></div>
            <div className="holo-ring ring-3"></div>
          </div>
        </div>
      </section>
      
      <footer className="copyright-footer">
        <div className="copyright-container">
          <div className="copyright-left">
            <p>&copy; 2024 SoftRanch. All rights reserved. Made with 💜 for visionaries.</p>
          </div>
          <div className="copyright-right">
            <a href="/privacy" className="footer-link">Privacy</a>
            <span className="divider">•</span>
            <a href="/terms" className="footer-link">Terms</a>
            <span className="divider">•</span>
            <a href="/cookies" className="footer-link">Cookies</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Finale;