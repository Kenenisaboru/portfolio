import React from 'react';
import { FaGithub, FaLinkedin, FaFacebookF, FaInstagram, FaTelegram, FaHeart, FaArrowUp, FaCode } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';

const Footer = ({ onScrollToSection }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-logo">
              <h3>Kenenisa <span className="footer-logo-highlight">Boru</span></h3>
              <p>Full-Stack Developer</p>
              <div className="footer-tagline">
                Building the future, one line of code at a time
              </div>
              <div className="footer-social-icons">
                <a href="https://github.com/Kenenisaboru" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/kenenisa-boru-8377a13a7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://leetcode.com/u/kananisa/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                  <FaCode />
                </a>
                <a href="https://web.facebook.com/kanuwiz.jah" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/kenenii4/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://t.me/kenenisaboru" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                  <FaTelegram />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Quick Links</h4>
                {['about', 'skills', 'projects', 'opensource', 'awards', 'contact'].map(section => (
                  <button
                    key={section}
                    className="footer-link"
                    onClick={() => onScrollToSection(section)}
                  >
                    {section === 'opensource' ? 'Open Source' : section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>

              <div className="link-group">
                <h4>Services</h4>
                <span className="footer-link">Web Development</span>
                <span className="footer-link">Full-Stack Solutions</span>
                <span className="footer-link">API Development</span>
                <span className="footer-link">Database Design</span>
              </div>

              <div className="link-group">
                <h4>Connect</h4>
                <a
                  href="https://github.com/Kenenisaboru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/kenenisa-boru-8377a13a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/kananisa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LeetCode
                </a>
                <a
                  href="mailto:kenenisaboru998@gmail.com"
                  className="footer-link"
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Kenenisa Boru. All rights reserved.</p>
            <p className="footer-built-with">
              Built with <SiReact className="react-spin" /> React & <FaHeart className="heart-beat" />
            </p>
          </div>
          <button
            className="footer-back-to-top"
            onClick={() => onScrollToSection('hero')}
            aria-label="Back to top"
          >
            <FaArrowUp /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
