import React from 'react';
import { Clock, Zap, DollarSign, Wrench, Code2, Sparkles } from 'lucide-react';
import './style.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="background-glow-features"></div>
      <div className="features-container">
        <div className="features-left">
          <div className="features-left-content">
            <div className="features-badge">
              <span>Why Choose SoftRanch</span>
            </div>
            
            <h2 className="features-title">
              Your Digital Success<br />
              Partner That<br />
              Delivers Excellence
            </h2>

            <p className="features-description">
              We don't just build websites - we craft digital experiences that drive results. 
              From lightning-fast response times to cutting-edge technology, discover why 500+ 
              businesses trust SoftRanch with their digital transformation.
            </p>
            
            <button className="features-button">
              Start Your Project
              <span className="arrow-icon">↗</span>
            </button>
          </div>
        </div>
        
        <div className="features-right">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={30} color="white" />
              </div>
              <h3 className="feature-title">Lightning Fast Response</h3>
              <p className="feature-description">
                Get replies within 2 hours, not days. Our dedicated team ensures your queries 
                are addressed immediately, keeping your project momentum at full speed.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={30} color="white" />
              </div>
              <h3 className="feature-title">On-Time Delivery</h3>
              <p className="feature-description">
                99.99% of our projects delivered on schedule. We use proven project management 
                methodologies to ensure your website launches exactly when promised.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <DollarSign size={30} color="white" />
              </div>
              <h3 className="feature-title">Competitive Pricing</h3>
              <p className="feature-description">
                Premium quality at fair prices. No hidden fees, no surprises - just transparent 
                pricing that delivers exceptional value for your investment.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Wrench size={30} color="white" />
              </div>
              <h3 className="feature-title">Continuous Maintenance</h3>
              <p className="feature-description">
                Your website stays secure, fast, and updated. Our ongoing maintenance includes 
                security patches, performance optimization, and content updates.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Code2 size={30} color="white" />
              </div>
              <h3 className="feature-title">Modern Tech Stack</h3>
              <p className="feature-description">
                Built with cutting-edge technologies like React, Next.js, and Node.js. 
                Your website will be fast, scalable, and future-ready.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Sparkles size={30} color="white" />
              </div>
              <h3 className="feature-title">Custom Solutions</h3>
              <p className="feature-description">
                No cookie-cutter templates. Every website is uniquely designed and developed 
                to match your brand identity and business objectives perfectly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;