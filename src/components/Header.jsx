import React, { useEffect } from 'react';
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa';
import logoImage from '../images/photo_2026-01-28_19-59-49.jpg';

const Header = ({
  activeSection,
  isMenuOpen,
  onToggleMenu,
  onScrollToSection,
  theme,
  onToggleTheme,
}) => {
  // Close menu on Escape key press for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        onToggleMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, onToggleMenu]);

  const handleNavClick = (section) => {
    if (isMenuOpen) {
      onToggleMenu();
    }
    onScrollToSection(section);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo-wrapper" onClick={() => handleNavClick('hero')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleNavClick('hero')} aria-label="Go to hero section">
            <img 
              src={logoImage} 
              alt="Kenenisa Boru Logo" 
              className="logo-image"
              width="44"
              height="44"
              loading="eager"
            />
            <h1 className="logo">
              <span className="logo-text-full">Kenenisa </span>
              <span className="logo-highlight">Boru</span>
            </h1>
          </div>

          <div className="header-right-actions">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <FaSun className="theme-icon sun" aria-hidden="true" />
              ) : (
                <FaMoon className="theme-icon moon" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              className="mobile-menu-btn"
              id="mobile-nav-toggle"
              onClick={onToggleMenu}
              aria-controls="primary-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span className={`menu-line ${isMenuOpen ? 'open' : ''}`} aria-hidden="true"></span>
              <span className={`menu-line ${isMenuOpen ? 'open' : ''}`} aria-hidden="true"></span>
              <span className={`menu-line ${isMenuOpen ? 'open' : ''}`} aria-hidden="true"></span>
            </button>
          </div>
          
          <div 
            className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} 
            onClick={onToggleMenu}
            aria-hidden="true"
          ></div>
          
          <nav 
            id="primary-navigation" 
            className={`nav ${isMenuOpen ? 'open' : ''}`} 
            aria-label="Main navigation"
          >
            {['about', 'skills', 'projects', 'awards', 'contact'].map(
              (section) => (
                <button
                  type="button"
                  key={section}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => handleNavClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="nav-indicator" aria-hidden="true"></span>
                </button>
              )
            )}
            <a 
              href="https://github.com/Kenenisaboru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-github"
              onClick={() => isMenuOpen && onToggleMenu()}
            >
              <FaGithub aria-hidden="true" /> GitHub
            </a>

            <a
              href={`${process.env.PUBLIC_URL || ''}/resume.pdf`}
              className="nav-resume"
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={() => isMenuOpen && onToggleMenu()}
            >
              Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

