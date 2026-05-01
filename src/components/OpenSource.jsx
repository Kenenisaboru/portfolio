import React from 'react';
import { FaGithub, FaCode, FaStar, FaRocket } from 'react-icons/fa';

const OpenSource = ({ contributions }) => {
  return (
    <section id="opensource" className="section opensource">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">GitHub</span>
          <h2 className="section-title">Featured Repositories</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A selection of my personal projects and contributions available on GitHub
          </p>
        </div>

        <div className="github-stats animate-on-scroll">
          <div className="github-stats-grid">
            <div className="github-stat">
              <FaGithub className="stat-icon" />
              <div className="stat-content">
                <h3>20+</h3>
                <p>Public Repositories</p>
              </div>
            </div>
            <div className="github-stat">
              <FaCode className="stat-icon" />
              <div className="stat-content">
                <h3>500+</h3>
                <p>Code Commits</p>
              </div>
            </div>
            <div className="github-stat">
              <FaStar className="stat-icon" />
              <div className="stat-content">
                <h3>6</h3>
                <p>Featured Projects</p>
              </div>
            </div>
            <div className="github-stat">
              <FaRocket className="stat-icon" />
              <div className="stat-content">
                <h3>10+</h3>
                <p>Major Projects</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contributions-grid animate-on-scroll">
          {contributions.map((contribution, index) => (
            <div key={index} className="contribution-card">
              <div className="contribution-header">
                <h3>{contribution.title}</h3>
                <span className="contribution-badge">
                  <FaGithub /> Repository
                </span>
              </div>
              
              <div className="contribution-body">
                <p className="contribution-desc">{contribution.description}</p>
                
                <div className="contribution-details">
                  <h4>Key Contributions:</h4>
                  <ul>
                    {contribution.contributions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="contribution-tech">
                  {contribution.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="contribution-links">
                  <a 
                    href={contribution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FaGithub /> View Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="opensource-cta animate-on-scroll">
          <div className="cta-content">
            <h3>Want to Collaborate?</h3>
            <p>I'm always open to collaborating on interesting projects.</p>
            <a 
              href="https://github.com/Kenenisaboru"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaGithub /> View My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;

