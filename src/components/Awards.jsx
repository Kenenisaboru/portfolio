import React, { useState } from 'react';
import { FaCalendarAlt, FaCertificate, FaExternalLinkAlt, FaTrophy, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

const awardFilters = [
  { id: 'all', label: 'All Awards', icon: <FaAward /> },
  { id: 'hackathon', label: 'Hackathons', icon: <FaTrophy /> },
  { id: 'certificate', label: 'Certifications', icon: <FaGraduationCap /> },
  { id: 'internship', label: 'Internships', icon: <FaBriefcase /> },
];

const Awards = ({ awards, onOpenImageModal }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredAwards = awards.filter(award => {
    if (activeFilter === 'all') return true;
    return award.type === activeFilter;
  });

  return (
    <section id="awards" className="section awards">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Recognition</span>
          <h2 className="section-title">Certifications & Awards</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Professional achievements, hackathon wins, and technical certifications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-wrapper animate-on-scroll">
          <div className="filter-container">
            {awardFilters.map(f => {
              const count = f.id === 'all' 
                ? awards.length 
                : awards.filter(a => a.type === f.id).length;
              
              return (
                <button
                  key={f.id}
                  className={`filter-btn ${activeFilter === f.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(f.id)}
                >
                  {f.icon} {f.label} <span className="filter-badge-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="awards-grid animate-on-scroll">
          {filteredAwards.map((award, index) => (
            <div 
              key={award.title} 
              className="award-card"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="award-card-header">
                <div className="award-icon">
                  {award.icon}
                </div>
                <div className="award-badge" data-type={award.type}>
                  {award.type === 'hackathon' ? '🏆 Hackathon' : 
                   award.type === 'certificate' ? '📜 Certificate' : 
                   award.type === 'internship' ? '💼 Internship' : 'Completed'}
                </div>
              </div>

              <div className="award-card-body">
                <h3 className="award-title">{award.title}</h3>
                <div className="award-meta">
                  <span className="award-org">{award.org}</span>
                  <span className="award-date">
                    <FaCalendarAlt /> {award.date}
                  </span>
                </div>
                <p className="award-desc">{award.desc}</p>
                
                {award.skills && (
                  <div className="award-skills">
                    {award.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="award-card-footer">
                {award.image ? (
                  <button 
                    className="btn btn-primary view-certificate"
                    onClick={() => onOpenImageModal(award.image, award.title)}
                  >
                    <FaCertificate /> View Certificate
                  </button>
                ) : (
                  award.verification && award.verification !== '#' && (
                    <a 
                      href={award.verification}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaExternalLinkAlt /> Verify Online
                    </a>
                  )
                )}
                {award.verification && award.verification !== '#' && award.image && (
                  <a 
                    href={award.verification}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Verify Link
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="certificates-showcase animate-on-scroll">
          <h3>Interactive Certificate Gallery</h3>
          <p className="gallery-subtitle">
            Click on any certificate preview to inspect high-resolution credential
          </p>
          <div className="certificate-gallery">
            {awards.filter(a => a.image).map((award, index) => (
              <div 
                key={index}
                className="certificate-thumbnail"
                onClick={() => onOpenImageModal(award.image, award.title)}
              >
                <img src={award.image} alt={award.title} />
                <div className="certificate-thumbnail-overlay">
                  <FaCertificate />
                  <span>{award.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

