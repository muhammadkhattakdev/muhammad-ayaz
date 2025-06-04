import React from 'react';
import './style.css';
import inspire from "../../../../../static/trusted_by/inspire.png";
import nurtify from "../../../../../static/trusted_by/nurtify.png";
import tatertot from "../../../../../static/trusted_by/tatertot.png";
import bolletePiu from "../../../../../static/trusted_by/bolleta.png";


const TrustedBy = () => {
  return (
    <section className="trusted-by">
      <div className="trusted-by-container">
        <h2 className="trusted-by-title">Recognized and Trusted by Top Companies</h2>
        
        <div className="trusted-by-logos">
          <div className="logo-item">
            <img src={inspire} alt="Company Logo 1" className="company-logo" />
          </div>
          
          <div className="logo-item">
            <img src={nurtify} alt="Company Logo 2" className="company-logo" />
          </div>
          
          <div className="logo-item">
            <h3 className="company-logo">TatertotKidsClub</h3>
            {/* <img src={tatertot} alt="Company Logo 3" className="company-logo" /> */}
          </div>

          <div className="logo-item">
            <img src={bolletePiu} alt="Company Logo 4" className="company-logo" />
          </div>
          
          <div className="logo-item">
            <h3 className="company-logo">
                Privy
            </h3>
            {/* <img src="/logo5.svg" alt="Company Logo 5" className="company-logo" /> */}
          </div>
          
          <div className="logo-item">
            <h3 className="company-logo">
                Fiverr
            </h3>
            {/* <img src="/logo6.svg" alt="Company Logo 6" className="company-logo" /> */}
          </div>
          
          <div className="logo-item">
          <h3 className="company-logo">
                Upwork
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;