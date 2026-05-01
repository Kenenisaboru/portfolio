import React from 'react';
import { FaGithub } from 'react-icons/fa';
import logoImage from '../images/photo_2025-10-01_12-53-30.jpg';

const Header = ({ activeSection, isMenuOpen, onToggleMenu, onScrollToSection }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-wrapper" onClick={() => onScrollToSection('hero')}>
            <img 
              src={logoImage} 
              alt="Kenenisa Boru Logo" 
              className="logo-image"
            />
            <h1 className="logo">
              Kenenisa <span className="logo-highlight">Boru</span>
            </h1>
          </div>
          
          <button className="mobile-menu-btn" onClick={onToggleMenu}>
            <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
          
          <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={onToggleMenu}></div>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            {['about', 'skills', 'projects', 'opensource', 'awards', 'contact'].map(
              (section) => (
                <button
                  key={section}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => onScrollToSection(section)}
                >
                  {section === 'opensource' ? 'Open Source' : section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="nav-indicator"></span>
                </button>
              )
            )}
            <a 
              href="https://github.com/Kenenisaboru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-github"
            >
              <FaGithub /> GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

