import React from 'react';
import './style.css';
import myImg from "../../../../../static/ayaz.png";



const Team = () => {
  return (
    <section className="team-section">
      <div className="team-glow"></div>
      <div className="team-container">
        <div className="team-header">
          <div className="team-badge">
            <span>Our Team</span>
          </div>

          <h2 className="team-title">
            Meet the People<br />
            Behind the Magic
          </h2>
          
          <p className="team-description">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        
        <div className="team-carousel">
          <div className="carousel-track">
            {/* First set of team members */}
            <div className="team-member">
              <img src={myImg} alt="Team Member 1" />
            </div>
            <div className="team-member">
              <img src={myImg} alt="Team Member 2" />
            </div>
            <div className="team-member">
              <img src={myImg} alt="Team Member 3" />
            </div>
            <div className="team-member">
              <img src={myImg} alt="Team Member 4" />
            </div>
            <div className="team-member">
              <img src={myImg} alt="Team Member 5" />
            </div>
            <div className="team-member">
              <img src={myImg} alt="Team Member 6" />
            </div>
            <div className="team-member">
              <img src={myImg} alt="Team Member 7" />
            </div>
            <div className="team-member">
              <img src={myImg} alt="Team Member 8" />
            </div>            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;