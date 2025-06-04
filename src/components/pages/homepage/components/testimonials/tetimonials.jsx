import React from 'react';
import './style.css';
import {PersonStanding} from "lucide-react"
import monique from "../../../../../static/trusted_by/monique.webp";
import avatar from "../../../../../static/trusted_by/avatar.png";
import f_avatar from "../../../../../static/trusted_by/f_avatar.png";


const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <span>Testimonials & Reviews</span>
          </div>
          
          <h2 className="testimonials-title">
            Hear From Our Happy Clients:<br />
            Their Stories
          </h2>
          
          <p className="testimonials-description">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-user">
              <div className="user-avatar">
                <img src={monique} alt="Monique Rosario" />
              </div>
              <div className="user-info">
                <h3 className="user-name">Monique Rosario</h3>
                <p className="user-title">Actress - CEO @Tatertot</p>
              </div>
            </div>
            
            <div className="testimonial-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            
            <p className="testimonial-text">
              I've worked with Muhammad and his team for one and half years and he has always delivered nothing but quality.
            </p>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-user">
              <div className="user-avatar">
                <img src={f_avatar} alt="" />
              </div>
              <div className="user-info">
                <h3 className="user-name">Maryam Al-Qureshi</h3>
                <p className="user-title">Founder @QuranAndHadith.org</p>
              </div>
            </div>
            
            <div className="testimonial-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            
            <p className="testimonial-text">
              The features are great, but the support team truly sets this SaaS apart. From onboarding to daily use, their quick responses and helpful guidance made the whole experience smooth and stress-free. It feels like we have a real partner, not just a service.
            </p>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-user">
              <div className="user-avatar">
                <img src={avatar} alt="" />
              </div>
              <div className="user-info">
                <h3 className="user-name">Ada Uyi</h3>
                <p className="user-title">Founder @Momevod</p>
              </div>
            </div>
            
            <div className="testimonial-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            
            <p className="testimonial-text">
                This my first Woking with these guys and I really appreciate the honesty, understanding and a great job and I will be very happy to work with him in the near future also I will gladly recommend him to anyone who needs is services above all am rating him 5 stars!
            </p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-user">
              <div className="user-avatar">
                <img src={avatar} alt="" />
              </div>
              <div className="user-info">
                <h3 className="user-name">Ayan</h3>
                <p className="user-title">Student</p>
              </div>
            </div>
            
            <div className="testimonial-rating">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            
            <p className="testimonial-text">
                Muhammad and his team did an amazing job in delivering a flawless website, exceeding expectations with comprehensive documentation. It's been a pleasure working with them due to their deep understanding, quick responses, and polite demeanor. Highly recommend!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;