import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaServer, FaStar, FaBolt, FaLayerGroup, FaTrophy, FaMobileAlt, FaLaptopCode, FaCalculator } from 'react-icons/fa';

const getProjectTypeColor = (type) => {
  switch (type) {
    case 'Full-Stack': return '#6366f1';
    case 'Frontend': return '#10b981';
    case 'Backend': return '#f59e0b';
    case 'Full-Stack / Hackathon': return '#f43f5e';
    case 'Algorithm': return '#8b5cf6';
    case 'DevOps': return '#ec4899';
    case 'Full-Stack / PWA': return '#06b6d4';
    case 'Mobile / React Native': return '#3b82f6';
    default: return '#6b7280';
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed': return '#10b981';
    case 'In Progress': return '#3b82f6';
    case 'Ongoing': return '#f59e0b';
    case 'Live': return '#10b981';
    default: return '#6b7280';
  }
};

const filterCategories = [
  { id: 'all', label: 'All Projects', icon: <FaLayerGroup /> },
  { id: 'fullstack', label: 'Full-Stack', icon: <FaServer /> },
  { id: 'hackathon', label: 'Hackathons', icon: <FaTrophy /> },
  { id: 'mobile', label: 'Mobile / PWA', icon: <FaMobileAlt /> },
  { id: 'frontend', label: 'Frontend', icon: <FaLaptopCode /> },
  { id: 'algorithm', label: 'Algorithms', icon: <FaCalculator /> }
];

const Projects = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'fullstack') return project.type.includes('Full-Stack');
    if (activeFilter === 'hackathon') return project.type.includes('Hackathon') || (project.highlights && project.highlights.some(h => h.toLowerCase().includes('hackathon')));
    if (activeFilter === 'mobile') return project.type.includes('PWA') || project.type.includes('Mobile');
    if (activeFilter === 'frontend') return project.type.includes('Frontend');
    if (activeFilter === 'algorithm') return project.type.includes('Algorithm');
    return true;
  });

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">My Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A showcase of my recent full-stack applications, hackathon entries, and open-source contributions
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="filter-wrapper animate-on-scroll">
          <div className="filter-container">
            {filterCategories.map(cat => {
              const count = cat.id === 'all' 
                ? projects.length 
                : projects.filter(p => {
                    if (cat.id === 'fullstack') return p.type.includes('Full-Stack');
                    if (cat.id === 'hackathon') return p.type.includes('Hackathon');
                    if (cat.id === 'mobile') return p.type.includes('PWA') || p.type.includes('Mobile');
                    if (cat.id === 'frontend') return p.type.includes('Frontend');
                    if (cat.id === 'algorithm') return p.type.includes('Algorithm');
                    return false;
                  }).length;

              return (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat.id)}
                >
                  {cat.icon} {cat.label} <span className="filter-badge-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid animate-on-scroll">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="project-card-header">
                <div className="project-icon" style={{ color: getProjectTypeColor(project.type) }}>
                  {project.icon}
                </div>
                <div className="project-badges">
                  <span 
                    className="project-type" 
                    style={{ backgroundColor: getProjectTypeColor(project.type) }}
                  >
                    {project.type}
                  </span>
                  <span 
                    className="project-status"
                    style={{ backgroundColor: getStatusColor(project.status) }}
                  >
                    {project.status}
                  </span>
                  {project.featured && (
                    <span className="project-featured">
                      <FaStar /> Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.desc}</p>
                
                {project.highlights && (
                  <div className="project-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-tag">
                        <FaBolt /> {highlight}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <div className="project-links">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta animate-on-scroll">
          <p>Want to see more of my code repositories?</p>
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

