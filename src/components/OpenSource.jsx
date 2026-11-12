import React from 'react';
import { FaGithub, FaCode, FaStar, FaRocket, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';

const OpenSource = ({ contributions }) => {
  return (
    <section id="opensource" className="section opensource">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">GitHub & Open Source</span>
          <h2 className="section-title">Featured Repositories</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A curated selection of publicly available open-source solutions, libraries, and applications on GitHub
          </p>
        </div>

        <div className="github-stats animate-on-scroll">
          <div className="github-stats-grid">
            <div className="github-stat">
              <FaGithub className="stat-icon" />
              <div className="stat-content">
                <h3>50+</h3>
                <p>Public Repositories</p>
              </div>
            </div>
            <div className="github-stat">
              <FaCode className="stat-icon" />
              <div className="stat-content">
                <h3>2,250+</h3>
                <p>Code Commits</p>
              </div>
            </div>
            <div className="github-stat">
              <FaStar className="stat-icon" />
              <div className="stat-content">
                <h3>10+</h3>
                <p>Featured Projects</p>
              </div>
            </div>
            <div className="github-stat">
              <FaRocket className="stat-icon" />
              <div className="stat-content">
                <h3>100%</h3>
                <p>Open Source Passion</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contributions-grid animate-on-scroll">
          {contributions.map((contribution, index) => (
            <div key={index} className="contribution-card-modern">
              <div className="repo-top-strip"></div>
              <div className="contribution-header">
                <div className="repo-title-group">
                  <FaGithub className="repo-icon" />
                  <h3 className="repo-title">{contribution.title}</h3>
                </div>
                <span className="contribution-badge">
                  Repository
                </span>
              </div>

              <div className="contribution-body">
                <p className="contribution-desc">{contribution.description}</p>

                <div className="contribution-details">
                  <h4>Key Architectural Contributions:</h4>
                  <ul>
                    {contribution.contributions.map((item, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="repo-bullet-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="contribution-tech">
                  {contribution.tech.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="contribution-links">
                  <a
                    href={contribution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-repo-github"
                  >
                    <FaGithub /> View on GitHub <FaExternalLinkAlt className="ext-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="opensource-cta animate-on-scroll">
          <div className="cta-content">
            <h3>Want to Collaborate or Contribute?</h3>
            <p>I'm always open to collaborating on open-source initiatives, hackathons, and innovative platforms.</p>
            <a
              href="https://github.com/Kenenisaboru"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaGithub /> Connect on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
