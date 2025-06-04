import React from 'react';
import './style.css';
import { 
  Search, 
  Code2, 
  Database, 
  Layers3, 
  Palette, 
  Smartphone,
  ShoppingCart,
  Zap
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search size={40} />,
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic with our advanced SEO strategies and techniques.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code2 size={40} />,
      title: "Frontend Development",
      description: "Create stunning, responsive user interfaces using modern frameworks like React, Vue, and Angular.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Database size={40} />,
      title: "Backend Development",
      description: "Build robust server-side applications with scalable databases and secure API integrations.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Layers3 size={40} />,
      title: "Full Stack Development",
      description: "End-to-end development solutions combining frontend and backend expertise for complete applications.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description: "Design intuitive and beautiful user experiences that convert visitors into loyal customers.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "E-commerce Solutions",
      description: "Complete online store development with payment integration and inventory management systems.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: <Zap size={40} />,
      title: "Performance Optimization",
      description: "Speed up your website and optimize performance for better user experience and search rankings.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-glow-primary"></div>
      <div className="services-glow-secondary"></div>
      <div className="services-container">
        <div className="services-header">
          <div className="services-badge">
            <span>Our Services</span>
          </div>
          
          <h2 className="services-title">
            Comprehensive Solutions<br />
            for Your Digital Success
          </h2>
          
          <p className="services-description">
            From concept to launch, we provide end-to-end digital solutions that help your business thrive in the modern digital landscape.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-index={index}>
              <div className={`service-icon-wrapper gradient-${index}`}>
                <div className="service-icon">
                  {service.icon}
                </div>
              </div>
              
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
              
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <button className="services-button">
            Get Started Today
            <span className="arrow-icon">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;