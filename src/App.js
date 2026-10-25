import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import profileImage from './images/photo_2025-10-01_12-53-30.jpg';
import heroBg from './images/istockphoto-2170146497-612x612.webp';
import skillsBg from './images/premium_photo-1682124651258-410b25fa9dc0.avif';
import CertificateModal from './components/CertificateModal';
import ScrollToTopButton from './components/ScrollToTopButton';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  tagline,
  skills,
  projects,
  featuredRepositories,
  awards,
  stats,
  personalInfo,
} from './data/portfolioData';

const App = () => {
  const [typedText, setTypedText] = useState('');
  const [activeSection, setActiveSection] = useState('about');
  const [scrollVisible, setScrollVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(tagline.slice(0, index + 1));
      index += 1;
      if (index === tagline.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollVisible(window.scrollY > 300);

      const sections = ['about', 'skills', 'projects', 'opensource', 'awards', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in');
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [isLoading]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 72;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader-content">
          <div className="loader-spinner" />
          <h2 className="loader-name">Kenenisa Boru</h2>
          <p className="loader-subtitle">Full-Stack Developer</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <CertificateModal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
      <ScrollToTopButton visible={scrollVisible} onClick={scrollToTop} />

      <Header
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((open) => !open)}
        onScrollToSection={scrollToSection}
      />

      <Hero
        heroBg={heroBg}
        typedText={typedText}
        personalInfo={personalInfo}
        stats={stats}
        onScrollToSection={scrollToSection}
      />

      <About
        personalInfo={personalInfo}
        profileImage={profileImage}
        onScrollToSection={scrollToSection}
        onOpenImageModal={(src, title) => setSelectedImage({ src, title })}
      />

      <Skills skills={skills} bgImage={skillsBg} />
      <Projects projects={projects} />
      <OpenSource contributions={featuredRepositories} />
      <Awards awards={awards} onOpenImageModal={(src, title) => setSelectedImage({ src, title })} />
      <Contact />
      <Footer onScrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
