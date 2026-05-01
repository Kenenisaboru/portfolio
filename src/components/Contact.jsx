import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebookF, FaInstagram, FaCalendarAlt, FaPaperPlane, FaCheckCircle, FaTelegram, FaCode } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Open mailto link as a fallback (no backend)
    const mailtoLink = `mailto:kenenisaboru998@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink, '_blank');

    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="contact-content animate-on-scroll">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:kenenisaboru998@gmail.com">kenenisaboru998@gmail.com</a>
                <p>Typically responds within 24 hours</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+251983701428">+251 983 701 428</a>
                <p>Available Mon-Fri, 9AM-6PM EAT</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Haramaya University, Harar</p>
                <p>Available for remote work worldwide</p>
              </div>
            </div>

            <div className="contact-social">
              <h3>Connect With Me</h3>
              <div className="social-links">
                <a href="https://github.com/Kenenisaboru" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/kenenisa-boru-8377a13a7/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a href="https://leetcode.com/u/kananisa/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LeetCode">
                  <FaCode />
                  <span>LeetCode</span>
                </a>
                <a href="https://web.facebook.com/kanuwiz.jah" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <FaFacebookF />
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/kenenii4/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
                <a href="https://t.me/kenenisaboru" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Telegram">
                  <FaTelegram />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="contact-form-header">
              <h3>Start a Project</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible</p>
            </div>

            {isSubmitted && (
              <div className="form-success">
                <FaCheckCircle />
                <span>Your email client has been opened! Thank you for reaching out.</span>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className={`form-group ${errors.name ? 'error' : ''}`}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-label="Your name"
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className={`form-group ${errors.email ? 'error' : ''}`}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-label="Your email"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className={`form-group ${errors.subject ? 'error' : ''}`}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-label="Subject"
                />
                {errors.subject && <span className="form-error">{errors.subject}</span>}
              </div>
              <div className={`form-group ${errors.message ? 'error' : ''}`}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  aria-label="Your message"
                ></textarea>
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>
              <button type="submit" className="btn btn-primary">
                <FaPaperPlane /> Send Message
              </button>
            </form>

            <div className="contact-availability">
              <h4>
                <FaCalendarAlt /> Current Availability
              </h4>
              <p>✅ Available for new projects</p>
              <p>✅ Open to full-time & contract work</p>
              <p>✅ Remote positions preferred</p>
              <p>✅ Open for internships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
