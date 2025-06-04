import React from 'react';
import "./style.css";
import d1 from "../../../static/portfolio/d1.png";
import d2 from "../../../static/portfolio/d2.png";
import d3 from "../../../static/portfolio/d3.png";
import d4 from "../../../static/portfolio/d4.png";
import d5 from "../../../static/portfolio/d5.png";
import d6 from "../../../static/portfolio/d6.png";
import d7 from "../../../static/portfolio/d7.png";

const PortfolioPage = () => {

  const projects = [
    {
      id: 1,
      image: d1,
      alt: "E-commerce Platform UI Design"
    },
    {
      id: 2,
      image: d2,
      alt: "SaaS Dashboard UI Design"
    },
    {
      id: 3,
      image: d3,
      alt: "Mobile Banking App UI Design"
    },
    {
      id: 4,
      image: d4,
      alt: "Real Estate Website UI Design"
    },
    {
      id: 5,
      image: d5,
      alt: "Food Delivery App UI Design"
    },
    {
      id: 6,
      image: d6,
      alt: "Healthcare Portal UI Design"
    },
    {
      id: 7,
      image: d7,
      alt: "Education Platform UI Design"
    },
  ];

  // Split projects into two columns
  const midPoint = Math.ceil(projects.length / 2);
  const leftColumn = projects.slice(0, midPoint);
  const rightColumn = projects.slice(midPoint);

  return (
    <div className="portfolio-page-wrapper">
      {/* Hero Section */}
      <section className="portfolio-page-hero">
        <div className="portfolio-page-hero-background"></div>
        <div className="page-glow-orb page-glow-orb-1"></div>
        <div className="page-glow-orb page-glow-orb-2"></div>
        <div className="page-glow-orb page-glow-orb-3"></div>
        <div className="portfolio-page-hero-content">
          <div className="portfolio-page-badge">
            <span>Our Work</span>
          </div>
          <h1 className="portfolio-page-hero-title">
            Portfolio Showcase
          </h1>
          <p className="portfolio-page-hero-description">
            Explore our latest web development projects. Each design represents our commitment 
            to creating exceptional digital experiences that drive results for our clients.
          </p>
          <div className="portfolio-page-stats">
            <div className="page-stats-glow-bg"></div>
            <div className="page-stat-item">
              <span className="page-stat-number">150+</span>
              <span className="page-stat-label">Projects Completed</span>
            </div>
            <div className="page-stat-item">
              <span className="page-stat-number">100%</span>
              <span className="page-stat-label">Client Satisfaction</span>
            </div>
            <div className="page-stat-item">
              <span className="page-stat-number">80+</span>
              <span className="page-stat-label">Happy Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-page-grid-section">
        <div className="page-grid-glow-left"></div>
        <div className="page-grid-glow-right"></div>
        <div className="page-floating-glow page-floating-glow-1"></div>
        <div className="page-floating-glow page-floating-glow-2"></div>
        <div className="portfolio-page-container">
          <div className="portfolio-page-columns">
            {/* Left Column */}
            <div className="portfolio-page-column">
              {leftColumn.map((project) => (
                <div key={project.id} className="portfolio-page-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.alt}
                    className="portfolio-page-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="portfolio-page-column">
              {rightColumn.map((project) => (
                <div key={project.id} className="portfolio-page-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.alt}
                    className="portfolio-page-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;