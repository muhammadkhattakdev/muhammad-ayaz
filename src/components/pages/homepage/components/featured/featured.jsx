import React from 'react';
import './style.css';

const Featured = () => {
  return (
    <section className="featured-section">
      <div className="featured-container">
        <div className="featured-header">
          <div className="featured-badge">
            <span>Featured Sections</span>
          </div>
          
          <h2 className="featured-title">
            We Don't Just Offer Software<br />
            — We Offer Solutions
          </h2>
          
          <p className="featured-description">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        
        <div className="featured-rows">
          {/* Row 1 - Image left, text right */}
          <div className="featured-row">
            <div className="featured-image">
              <img src="/featured-image-1.jpg" alt="Analytics Dashboard" />
            </div>
            
            <div className="featured-content">
              <div className="featured-content-badge">
                <span>Analytics & Reporting</span>
              </div>
              
              <h3 className="featured-content-title">
                Intelligent Insights<br />
                at Your Fingertips
              </h3>
              
              <p className="featured-content-description">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
              
              <button className="featured-button">
                Learn More
                <span className="arrow-icon">↗</span>
              </button>
            </div>
          </div>
          
          {/* Row 2 - Text left, image right */}
          <div className="featured-row">
            <div className="featured-content">
              <div className="featured-content-badge">
                <span>Growth & Scaling</span>
              </div>
              
              <h3 className="featured-content-title">
                Unmatched<br />
                Flexibility and<br />
                Scalability
              </h3>
              
              <p className="featured-content-description">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
              
              <button className="featured-button">
                Learn More
                <span className="arrow-icon">↗</span>
              </button>
            </div>
            
            <div className="featured-image">
              <img src="/featured-image-2.jpg" alt="Scalability Dashboard" />
            </div>
          </div>
          
          {/* Row 3 - Image left, text right */}
          <div className="featured-row">
            <div className="featured-image">
              <img src="/featured-image-3.jpg" alt="Security Dashboard" />
            </div>
            
            <div className="featured-content">
              <div className="featured-content-badge">
                <span>Security & Compliance</span>
              </div>
              
              <h3 className="featured-content-title">
                Enterprise-Grade<br />
                Protection Built-in
              </h3>
              
              <p className="featured-content-description">
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
              
              <button className="featured-button">
                Learn More
                <span className="arrow-icon">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="purple-glow-top-right"></div>
    </section>
  );
};

export default Featured;