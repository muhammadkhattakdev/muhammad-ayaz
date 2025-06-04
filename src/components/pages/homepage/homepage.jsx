import React from 'react';
import './style.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero1/hero1';
import TrustedBy from './components/trustedBy/trustedBy';
import Features from './components/features/features';
import Featured from './components/featured/featured';
import Testimonials from './components/testimonials/tetimonials';
import Team from './components/team/team';
import Portfolio from './components/portfolio/portfolio';
import Services from './components/services/services';
import Finale from './components/finale/finale';


const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <TrustedBy />
      <Services />
      <Features />
      <Featured />
      <Testimonials />
      <Team />
      <Portfolio />
    </div>
  );
};

export default Homepage;