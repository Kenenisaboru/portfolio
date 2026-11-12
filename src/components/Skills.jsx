import React, { useState, useMemo } from 'react';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaLayerGroup,
  FaTerminal,
  FaCheckDouble,
} from 'react-icons/fa';

const skillTabs = [
  { id: 'all', label: 'All Skills', icon: <FaLayerGroup /> },
  { id: 'Frontend', label: 'Frontend', icon: <FaCode /> },
  { id: 'Backend', label: 'Backend', icon: <FaServer /> },
  { id: 'Database', label: 'Databases', icon: <FaDatabase /> },
  { id: 'Language', label: 'Languages', icon: <FaTerminal /> },
  { id: 'Tools', label: 'Tools & DevOps', icon: <FaTools /> },
];

const Skills = ({ skills, bgImage }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = useMemo(() => {
    if (activeTab === 'all') return skills;
    return skills.filter((skill) => skill.category === activeTab);
  }, [skills, activeTab]);

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
          <h2 className="section-title">Technical Skills & Arsenal</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Engineered with modern full-stack practices, scalable databases, and high-performance frontend architectures
          </p>
        </div>

        {/* Skills Summary Banner */}
        <div className="skills-summary-banner animate-on-scroll">
          <div className="summary-pill">
            <FaCheckDouble className="summary-pill-icon" />
            <span>{skills.length}+ Core Technologies</span>
          </div>
          <div className="summary-pill">
            <span className="highlight-dot"></span>
            <span>MERN & Full-Stack Architecture</span>
          </div>
          <div className="summary-pill">
            <span className="highlight-dot"></span>
            <span>RESTful APIs & Database Optimization</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="filter-wrapper animate-on-scroll">
          <div className="filter-container">
            {skillTabs.map((tab) => {
              const count =
                tab.id === 'all'
                  ? skills.length
                  : skills.filter((s) => s.category === tab.id).length;

              return (
                <button
                  type="button"
                  key={tab.id}
                  className={`filter-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  aria-pressed={activeTab === tab.id}
                >
                  {tab.icon} {tab.label}{' '}
                  <span className="filter-badge-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modern Skills Grid */}
        <div className="skills-modern-grid animate-on-scroll">
          {filteredSkills.map((skill, index) => {
            return (
              <div
                key={skill.name}
                className="skill-card-modern"
                style={{
                  '--skill-accent': skill.color,
                  animationDelay: `${index * 0.04}s`,
                }}
              >
                <div className="skill-card-inner">
                  <div className="skill-top-row">
                    <div
                      className="skill-icon-modern"
                      style={{
                        color: skill.color,
                        backgroundColor: `${skill.color}18`,
                        borderColor: `${skill.color}40`,
                      }}
                    >
                      {skill.icon}
                    </div>

                    <div className="skill-meta-tags">
                      <span className="skill-category-badge">{skill.category}</span>
                      <span
                        className="skill-level-badge"
                        style={{
                          color: skill.color,
                          backgroundColor: `${skill.color}15`,
                          borderColor: `${skill.color}35`,
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  <div className="skill-content">
                    <div className="skill-title-row">
                      <h4 className="skill-name">{skill.name}</h4>
                      <span className="skill-percentage">{skill.percent}</span>
                    </div>

                    <div className="skill-progress-track">
                      <div
                        className="skill-progress-fill"
                        style={{
                          width: skill.percent,
                          background: `linear-gradient(90deg, ${skill.color}90, ${skill.color})`,
                          boxShadow: `0 0 10px ${skill.color}40`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;


