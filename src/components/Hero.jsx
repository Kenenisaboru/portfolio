import React, { useEffect, useRef } from 'react';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGraduationCap,
  FaRocket,
  FaTelegram,
  FaDownload
} from 'react-icons/fa';

const Hero = ({ heroBg, typedText, personalInfo, stats, onScrollToSection }) => {
  const canvasRef = useRef(null);

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 60; i++) {
      particles.push(new Particle());
    }

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawLines();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <canvas ref={canvasRef} className="hero-particles" />
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content animate-on-scroll">
            <div className="hero-text">
              <div className="hero-badges">
                <span className="badge badge-primary">Full-Stack Developer</span>
                <span className="badge badge-secondary">React Specialist</span>
                <span className="badge badge-accent">Available for Hire</span>
              </div>
              <h1>
                <span className="hero-greeting">Hello, I'm</span>
                <span className="hero-name">Kenenisa Boru</span>
              </h1>
              <h2 className="hero-title">
                Building <span className="gradient-text">Digital Solutions</span> That Make an Impact
              </h2>
              <p className="hero-tagline">{typedText}<span className="typing-cursor">|</span></p>

              <div className="hero-personal-info">
                <div className="info-item">
                  <FaMapMarkerAlt />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="info-item">
                  <FaCalendarAlt />
                  <span>{personalInfo.experience}</span>
                </div>
                <div className="info-item">
                  <FaGraduationCap />
                  <span>{personalInfo.education}</span>
                </div>
              </div>

              <div className="hero-cta">
                <button className="btn btn-primary" onClick={() => onScrollToSection('projects')}>
                  <FaRocket /> View My Projects
                </button>
                <button className="btn btn-secondary" onClick={() => onScrollToSection('contact')}>
                  <FaEnvelope /> Get In Touch
                </button>
                <a href="#" className="btn btn-outline cv-btn" download>
                  <FaDownload /> Download CV
                </a>
              </div>

              <div className="hero-social">
                <a href="https://github.com/Kenenisaboru" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/kenenisa-boru-8377a13a7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <FaLinkedin />
                </a>
                <a href="https://leetcode.com/u/kananisa/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile">
                  <FaCode />
                </a>
                <a href="https://web.facebook.com/kanuwiz.jah" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/kenenii4/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                  <FaInstagram />
                </a>
                <a href="https://t.me/kenenisaboru" target="_blank" rel="noopener noreferrer" aria-label="Telegram Profile">
                  <FaTelegram />
                </a>
              </div>
            </div>

            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={stat.label} className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => onScrollToSection('about')}>
        <span>Scroll Down</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
