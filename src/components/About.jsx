import React from 'react';
import { 
  FaEnvelope,
  FaGithub,
  FaUser,
  FaCalendarAlt,
  FaGraduationCap,
  FaLightbulb,
  FaShieldAlt,
  FaBolt,
  FaChartLine
} from 'react-icons/fa';

const About = ({ personalInfo, profileImage, onScrollToSection, onOpenImageModal }) => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Get to Know Me</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Passionate developer dedicated to creating exceptional digital experiences
          </p>
        </div>
        
        <div className="about-content animate-on-scroll">
          <div className="profile-section">
            <div className="profile-image-container">
              <div className="profile-image-wrapper" onClick={() => onOpenImageModal(profileImage, 'Profile Photo')}>
                <img 
                  src={profileImage} 
                  alt="Kenenisa Boru - Full Stack Developer" 
                  className="profile-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="profile-image-overlay">
                  <FaUser className="profile-icon-fallback" />
                  <span>View Profile</span>
                </div>
                <div className="profile-status">
                  <span className="status-dot"></span>
                  <span>{personalInfo.availability}</span>
                </div>
              </div>
              
              <div className="profile-quick-info">
                <div className="info-card">
                  <FaCalendarAlt />
                  <div>
                    <h4>2+ Years</h4>
                    <p>Experience</p>
                  </div>
                </div>
                <div className="info-card">
                  <FaGraduationCap />
                  <div>
                    <h4>BSc IS</h4>
                    <p>Education</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-text">
              <h3>Passionate Full-Stack Developer</h3>
              <p>
                I'm a dedicated Full-Stack Developer with expertise in modern web technologies 
                and a passion for building scalable, user-centric applications. My journey combines 
                formal education with continuous self-improvement through hands-on projects and 
                industry best practices.
              </p>
              <p>
                With comprehensive experience across frontend and backend technologies, I specialize 
                in creating complete web solutions from database design to user interface implementation. 
                My projects range from enterprise systems to creative experiments, always focusing on 
                performance, security, and user experience.
              </p>
              
              <div className="about-highlights">
                <div className="highlight">
                  <div className="highlight-icon">
                    <FaLightbulb />
                  </div>
                  <div>
                    <h4>Innovative Solutions</h4>
                    <p>Creative problem-solving with modern technologies</p>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-icon">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <h4>Quality Focus</h4>
                    <p>Clean code, testing, and best practices</p>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-icon">
                    <FaBolt />
                  </div>
                  <div>
                    <h4>Fast Delivery</h4>
                    <p>Efficient development with agile methodologies</p>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-icon">
                    <FaChartLine />
                  </div>
                  <div>
                    <h4>Scalable Architecture</h4>
                    <p>Future-proof solutions that grow with your needs</p>
                  </div>
                </div>
              </div>
              
              <div className="about-cta">
                <button className="btn btn-primary" onClick={() => onScrollToSection('contact')}>
                  <FaEnvelope /> Let's Work Together
                </button>
                <a 
                  href="https://github.com/Kenenisaboru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FaGithub /> View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

