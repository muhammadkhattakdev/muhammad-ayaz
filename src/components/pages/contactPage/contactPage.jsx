import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import "./style.css";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    contactNumber: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Dummy API call - replace with your actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success/error randomly for demo
      const isSuccess = Math.random() > 0.3;
      
      if (isSuccess) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          contactNumber: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="contact-page-wrapper">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-background"></div>
        <div className="contact-glow-orb contact-glow-orb-1"></div>
        <div className="contact-glow-orb contact-glow-orb-2"></div>
        <div className="contact-hero-content">
          <div className="contact-badge">
            <span>Get In Touch</span>
          </div>
          <h1 className="contact-hero-title">
            Let's Build Something
            <br />
            Amazing Together
          </h1>
          <p className="contact-hero-description">
            Ready to transform your digital presence? Drop us a message and let's discuss 
            how we can bring your vision to life with cutting-edge web development.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-main-section">
        <div className="contact-floating-glow contact-floating-glow-1"></div>
        <div className="contact-floating-glow contact-floating-glow-2"></div>
        
        <div className="contact-container">
          <div className="contact-content">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-description">
                We're here to help you succeed. Reach out to us through any of these channels.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-method-content">
                    <h3>Email Us</h3>
                    <p>hello@softranch.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-method-content">
                    <h3>Call Us</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-method-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-method-content">
                    <h3>Visit Us</h3>
                    <p>123 Tech Street<br />Digital City, DC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form-glow"></div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <h2 className="contact-form-title">Send us a Message</h2>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="status-message success">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="status-message error">
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again later.</span>
                  </div>
                )}
                
                {/* First Name */}
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`form-input ${errors.firstName ? 'error' : ''}`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <span className="form-error">{errors.firstName}</span>
                  )}
                </div>
                
                {/* Contact Number */}
                <div className="form-group">
                  <label htmlFor="contactNumber" className="form-label">
                    Contact Number <span className="optional">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <span className="form-error">{errors.email}</span>
                  )}
                </div>
                
                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    placeholder="Tell us about your project..."
                    rows="5"
                  ></textarea>
                  {errors.message && (
                    <span className="form-error">{errors.message}</span>
                  )}
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="submit-spinner"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;