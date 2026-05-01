import React from 'react';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = ({ skills, bgImage }) => {
  const frontendSkills = skills.filter(skill => skill.category === 'Frontend');
  const backendSkills = skills.filter(skill => skill.category === 'Backend');
  const languageSkills = skills.filter(skill => skill.category === 'Language');
  const databaseSkills = skills.filter(skill => skill.category === 'Database');
  const toolSkills = skills.filter(skill => skill.category === 'Tools');

  return (
    <section
      id="skills"
      className="section skills skills-with-bg"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      {bgImage && <div className="skills-overlay"></div>}
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">My Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            A comprehensive toolkit for modern web development across all layers
          </p>
        </div>

        <div className="skills-category-grid animate-on-scroll">
          <div className="skills-category">
            <h3 className="category-title">
              <FaCode /> Frontend Development
            </h3>
            <div className="skills-grid">
              {frontendSkills.map((skill, index) => (
                <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="skill-header">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: skill.percent || skill.level, backgroundColor: skill.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">
              <FaServer /> Backend Development
            </h3>
            <div className="skills-grid">
              {backendSkills.map((skill, index) => (
                <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="skill-header">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: skill.percent || skill.level, backgroundColor: skill.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">
              <FaDatabase /> Languages & Databases
            </h3>
            <div className="skills-grid">
              {[...languageSkills, ...databaseSkills].map((skill, index) => (
                <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="skill-header">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: skill.percent || skill.level, backgroundColor: skill.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">
              <FaTools /> Tools & DevOps
            </h3>
            <div className="skills-grid">
              {toolSkills.map((skill, index) => (
                <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="skill-header">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h4>{skill.name}</h4>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: skill.percent || skill.level, backgroundColor: skill.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


