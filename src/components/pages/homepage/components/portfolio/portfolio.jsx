import React from 'react';
import './style.css';
import dashboard from "../../../../../static/work/dashboard.png";
import ecommerce from "../../../../../static/work/ecommerce.png";
import mobile_app from "../../../../../static/work/mobile_app.png";
import portfolio from "../../../../../static/work/portfolio.png";
import corporate from "../../../../../static/work/corporate.webp";
import business from "../../../../../static/work/business.png";



const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-glow"></div>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div className="portfolio-badge">
            <span>Our Portfolio</span>
          </div>
          
          <h2 className="portfolio-title">
            Stunning Websites<br />
            We've Created
          </h2>
          
          <p className="portfolio-description">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img src={ecommerce} alt="E-commerce Platform" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3 className="project-title">E-commerce Platform</h3>
                  <p className="project-category">Web Development</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img src={dashboard} alt="SaaS Dashboard" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3 className="project-title">SaaS Dashboard</h3>
                  <p className="project-category">SaaS Development</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img src={corporate} alt="Corporate Website" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3 className="project-title">Corporate Website</h3>
                  <p className="project-category">Branding & Web</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img src={mobile_app} alt="Mobile App Landing" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3 className="project-title">Mobile App Landing</h3>
                  <p className="project-category">Landing Page</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="portfolio-item">
            <div className="portfolio-image">
              <img src={portfolio} alt="Portfolio Website" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3 className="project-title">Portfolio Website</h3>
                  <p className="project-category">Creative Design</p>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-image">
              <img src={business} alt="Business Platform" />
              <div className="portfolio-overlay">
                <div className="portfolio-info">
                  <h3 className="project-title">Business Platform</h3>
                  <p className="project-category">Full Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="portfolio-cta">
          <button className="portfolio-button">
            See All Website Works
            <span className="arrow-icon">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;