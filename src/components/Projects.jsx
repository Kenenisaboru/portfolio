import React, { useState, useMemo } from 'react';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaServer,
  FaStar,
  FaCheckCircle,
  FaLayerGroup,
  FaTrophy,
  FaMobileAlt,
  FaLaptopCode,
  FaCalculator,
  FaSearch,
  FaTimes,
  FaRobot,
} from 'react-icons/fa';

const filterCategories = [
  { id: 'all', label: 'All Projects', icon: <FaLayerGroup /> },
  { id: 'fullstack', label: 'Full-Stack', icon: <FaServer /> },
  { id: 'hackathon', label: 'Hackathons', icon: <FaTrophy /> },
  { id: 'ai', label: 'AI & Data', icon: <FaRobot /> },
  { id: 'mobile', label: 'Mobile / PWA', icon: <FaMobileAlt /> },
  { id: 'frontend', label: 'Frontend', icon: <FaLaptopCode /> },
  { id: 'algorithm', label: 'Algorithms', icon: <FaCalculator /> },
];

const Projects = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category match
      let matchesCategory = true;
      if (activeFilter === 'fullstack') {
        matchesCategory = project.type.includes('Full-Stack');
      } else if (activeFilter === 'hackathon') {
        matchesCategory =
          project.type.includes('Hackathon') ||
          (project.highlights &&
            project.highlights.some((h) => h.toLowerCase().includes('hackathon')));
      } else if (activeFilter === 'ai') {
        matchesCategory =
          project.type.toLowerCase().includes('ai') ||
          project.tech.some((t) => t.toLowerCase().includes('ai') || t.toLowerCase().includes('ml') || t.toLowerCase().includes('python'));
      } else if (activeFilter === 'mobile') {
        matchesCategory = project.type.includes('PWA') || project.type.includes('Mobile');
      } else if (activeFilter === 'frontend') {
        matchesCategory = project.type.includes('Frontend');
      } else if (activeFilter === 'algorithm') {
        matchesCategory = project.type.includes('Algorithm');
      }

      if (!matchesCategory) return false;

      // Search match
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const titleMatch = project.title.toLowerCase().includes(q);
      const descMatch = project.desc.toLowerCase().includes(q);
      const techMatch = project.tech && project.tech.some((t) => t.toLowerCase().includes(q));
      const typeMatch = project.type.toLowerCase().includes(q);

      return titleMatch || descMatch || techMatch || typeMatch;
    });
  }, [projects, activeFilter, searchQuery]);

  const resetFilters = () => {
    setActiveFilter('all');
    setSearchQuery('');
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">My Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A showcase of full-stack platforms, hackathon winners, AI tools, and production applications
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="projects-controls animate-on-scroll">
          {/* Interactive Search Bar */}
          <div className="project-search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="project-search-input"
              placeholder="Search projects by name, technology (e.g. React, MERN, AI, MySQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                title="Clear search"
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="filter-wrapper">
            <div className="filter-container">
              {filterCategories.map((cat) => {
                const count = projects.filter((p) => {
                  if (cat.id === 'all') return true;
                  if (cat.id === 'fullstack') return p.type.includes('Full-Stack');
                  if (cat.id === 'hackathon')
                    return (
                      p.type.includes('Hackathon') ||
                      (p.highlights && p.highlights.some((h) => h.toLowerCase().includes('hackathon')))
                    );
                  if (cat.id === 'ai')
                    return (
                      p.type.toLowerCase().includes('ai') ||
                      p.tech.some((t) => t.toLowerCase().includes('ai') || t.toLowerCase().includes('ml') || t.toLowerCase().includes('python'))
                    );
                  if (cat.id === 'mobile') return p.type.includes('PWA') || p.type.includes('Mobile');
                  if (cat.id === 'frontend') return p.type.includes('Frontend');
                  if (cat.id === 'algorithm') return p.type.includes('Algorithm');
                  return false;
                }).length;

                return (
                  <button
                    type="button"
                    key={cat.id}
                    className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(cat.id)}
                    aria-pressed={activeFilter === cat.id}
                  >
                    {cat.icon} {cat.label} <span className="filter-badge-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="projects-empty-state animate-on-scroll">
            <div className="empty-icon-wrap">
              <FaSearch />
            </div>
            <h3>No projects found</h3>
            <p>
              No projects match "{searchQuery}" in the selected category.
            </p>
            <button className="btn btn-secondary" onClick={resetFilters}>
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="projects-grid animate-on-scroll">
            {filteredProjects.map((project, index) => {
              const isLive = project.status === 'Live' || Boolean(project.demo);

              // Determine accent category class
              let accentClass = 'accent-fullstack';
              if (project.type.toLowerCase().includes('mobile') || project.type.toLowerCase().includes('pwa')) {
                accentClass = 'accent-mobile';
              } else if (project.type.toLowerCase().includes('ai')) {
                accentClass = 'accent-ai';
              } else if (project.type.toLowerCase().includes('algorithm')) {
                accentClass = 'accent-algorithm';
              } else if (project.type.toLowerCase().includes('frontend')) {
                accentClass = 'accent-frontend';
              }

              return (
                <div
                  key={project.title}
                  className={`project-card-modern ${accentClass} ${project.featured ? 'is-featured' : ''}`}
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  {/* Top glowing gradient border */}
                  <div className="project-top-strip"></div>

                  {/* Header: Icon, Category Badge & Status */}
                  <div className="project-card-header">
                    <div className="project-icon-badge">
                      <span className="project-icon">{project.icon}</span>
                    </div>

                    <div className="project-badges">
                      {project.featured && (
                        <span className="badge-pill badge-featured">
                          <FaStar className="badge-icon" /> Featured
                        </span>
                      )}
                      {project.status && (
                        <span className={`badge-pill badge-status ${isLive ? 'badge-live' : ''}`}>
                          {isLive && <span className="live-dot-pulse"></span>}
                          {project.status}
                        </span>
                      )}
                      <span className="badge-pill badge-type">{project.type}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="project-card-body">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.desc}</p>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="project-highlights">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="highlight-item">
                            <FaCheckCircle className="highlight-icon" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Stack Tags */}
                    <div className="project-tech-tags">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action Buttons */}
                  <div className="project-card-footer">
                    <div className="project-actions">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn btn-code"
                        >
                          <FaGithub /> <span>Code</span>
                        </a>
                      )}
                      {project.demo && project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn btn-demo"
                        >
                          <FaExternalLinkAlt /> <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="projects-cta animate-on-scroll">
          <p>Looking for more repositories and open-source contributions?</p>
          <a
            href="https://github.com/Kenenisaboru"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaGithub /> Explore Full GitHub Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

