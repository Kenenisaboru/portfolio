import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaStar, FaBolt } from 'react-icons/fa';

const getProjectTypeColor = (type) => {
  switch (type) {
    case 'Full-Stack': return '#6366f1';
    case 'Frontend': return '#10b981';
    case 'Backend': return '#f59e0b';
    case 'Full-Stack / Hackathon': return '#f43f5e'; // Rose color for hackathon
    case 'Algorithm': return '#8b5cf6';
    case 'DevOps': return '#ec4899';
    case 'Full-Stack / PWA': return '#06b6d4'; // Cyan for PWA
    default: return '#6b7280';
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed': return '#10b981';
    case 'In Progress': return '#3b82f6';
    case 'Ongoing': return '#f59e0b';
    default: return '#6b7280';
  }
};

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A showcase of my recent work and technical contributions
          </p>
        </div>

        <div className="projects-grid animate-on-scroll">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
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
                  {project.link ? (
                    <>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaGithub /> View Code
                      </a>
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
                    </>
                  ) : (
                    <>
                      <a
                        href={project.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaCode /> Frontend
                      </a>
                      <a
                        href={project.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaServer /> Backend
                      </a>
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
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta animate-on-scroll">
          <p>Want to see more? Check out my complete portfolio on GitHub</p>
          <a 
            href="https://github.com/Kenenisaboru" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaGithub /> View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

