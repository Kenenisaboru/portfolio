import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import {
  FaGithub,
  FaCode,
  FaDatabase,
  FaAward,
  FaHospital,
  FaGraduationCap,
  FaLaptopCode,
  FaCertificate,
  FaCalendarAlt,
  FaRocket,
  FaUsers
} from 'react-icons/fa';
import {
  SiReact, SiJavascript, SiNodedotjs, SiExpress, SiMongodb,
  SiMysql, SiGit, SiTailwindcss, SiPython, SiCplusplus,
  SiHtml5, SiCss3, SiSpringboot, SiPostgresql, SiRedux,
} from 'react-icons/si';

// Import images
import profileImage from './images/photo_2025-10-01_12-53-30.jpg';
import hucissaCert from './images/photo_2025-04-27_06-58-00.jpg';
import zemenayCert from './images/photo_2025-12-26_18-19-46.jpg';
import dsaCert from './images/photo_2026-03-10_15-55-39.jpg';
import hackathonCert from './images/photo_2026-04-01_16-11-32.jpg';
import codeAlphaCert from './images/photo_2026-05-01_09-21-14.jpg';
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

const App = () => {
  const [typedText, setTypedText] = useState('');
  const [activeSection, setActiveSection] = useState('about');
  const [scrollVisible, setScrollVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef(null);

  const tagline = 'Full-Stack Developer specializing in React, Node.js, and modern web technologies. Passionate about creating impactful digital solutions.';

  const skills = [
    { name: 'React', level: 'Advanced', percent: '85%', icon: <SiReact />, color: '#61DAFB', category: 'Frontend' },
    { name: 'JavaScript', level: 'Advanced', percent: '80%', icon: <SiJavascript />, color: '#F7DF1E', category: 'Language' },
    { name: 'Node.js', level: 'Advanced', percent: '75%', icon: <SiNodedotjs />, color: '#339933', category: 'Backend' },
    { name: 'Express', level: 'Advanced', percent: '72%', icon: <SiExpress />, color: '#000000', category: 'Backend' },
    { name: 'MySQL', level: 'Advanced', percent: '78%', icon: <SiMysql />, color: '#4479A1', category: 'Database' },
    { name: 'Git/GitHub', level: 'Advanced', percent: '85%', icon: <SiGit />, color: '#F05032', category: 'Tools' },
    { name: 'HTML5', level: 'Advanced', percent: '90%', icon: <SiHtml5 />, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', level: 'Advanced', percent: '85%', icon: <SiCss3 />, color: '#1572B6', category: 'Frontend' },
    { name: 'Spring Boot', level: 'Intermediate', percent: '60%', icon: <SiSpringboot />, color: '#6DB33F', category: 'Backend' },
    { name: 'TailwindCSS', level: 'Intermediate', percent: '65%', icon: <SiTailwindcss />, color: '#06B6D4', category: 'Frontend' },
    { name: 'C++', level: 'Intermediate', percent: '60%', icon: <SiCplusplus />, color: '#00599C', category: 'Language' },
    { name: 'MongoDB', level: 'Beginner', percent: '40%', icon: <SiMongodb />, color: '#47A248', category: 'Database' },
    { name: 'PostgreSQL', level: 'Beginner', percent: '35%', icon: <SiPostgresql />, color: '#336791', category: 'Database' },
    { name: 'Python', level: 'Beginner', percent: '45%', icon: <SiPython />, color: '#3776AB', category: 'Language' },
    { name: 'Redux', level: 'Beginner', percent: '30%', icon: <SiRedux />, color: '#764ABC', category: 'Frontend' },
    { name: 'Postman', level: 'Advanced', icon: <FaCode />, color: '#FF6C37', category: 'Tools' },
    { name: 'Vercel/Render', level: 'Advanced', icon: <FaRocket />, color: '#000000', category: 'Tools' },
    { name: 'Figma', level: 'Intermediate', icon: <FaCode />, color: '#F24E1E', category: 'Tools' },
    { name: 'Docker', level: 'Beginner', icon: <FaDatabase />, color: '#2496ED', category: 'Tools' },
  ];

  const projects = [
    {
      title: 'Voice of HRU — Student Complaint Platform',
      desc: 'A comprehensive feedback and complaint management system for Haramaya University students. Developed for the university hackathon to bridge the communication gap between students and administration.',
      link: 'https://github.com/Kenenisaboru/-Student-complain-Voice-of-HRU',
      demo: 'https://student-complain-voice-complain-platform.onrender.com',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MERN Stack', 'JWT', 'Redux'],
      type: 'Full-Stack / Hackathon',
      icon: <FaRocket />,
      status: 'Live',
      highlights: [
        'Serving 500+ students with real-time feedback',
        'Technical Challenge: Socket.io integration for instant notifications',
        'Admin dashboard with data visualization and analytics'
      ]
    },
    {
      title: 'Hospital Management System',
      desc: 'A comprehensive full-stack hospital management system with patient management, appointment scheduling, medical records, and billing integration.',
      link: 'https://github.com/Kenenisaboru/Hospital-management-system',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'REST API', 'JWT', 'Redux'],
      type: 'Full-Stack',
      icon: <FaHospital />,
      status: 'Completed',
      highlights: [
        'Secure multi-role authentication (Admin, Doctor, Patient)',
        'Technical Challenge: Complex MySQL relational database schema optimization',
        'Built to handle 50+ concurrent professional users'
      ]
    },
    {
      title: 'Frontend Tricks Collection',
      desc: 'Curated collection of modern frontend techniques, animations, UI components, and best practices.',
      link: 'https://github.com/Kenenisaboru/All-my-frontend-trick',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Animations', 'Responsive Design'],
      type: 'Frontend',
      icon: <FaLaptopCode />,
      status: 'Ongoing',
      highlights: ['Reusable components', 'Performance tips', 'Accessibility patterns']
    },
    {
      title: 'Aseko Students Platform — Community Hub',
      desc: 'A cross-platform networking solution for students from Arsi Aseko. Built as a Progressive Web App (PWA) to enable communication and resource sharing across mobile and desktop devices.',
      link: 'https://github.com/Kenenisaboru/student-platform',
      tech: ['React', 'Firebase', 'PWA', 'Tailwind CSS', 'Real-time Chat', 'Cloud Storage'],
      type: 'Full-Stack / PWA',
      icon: <FaUsers />,
      status: 'Live',
      highlights: [
        'Connecting 300+ students across various universities',
        'Technical Challenge: Optimized PWA caching for offline accessibility',
        'Cross-platform installation on Android, iOS, and Desktop'
      ]
    },
    {
      title: 'Data Structure & Algorithm Library',
      desc: 'Comprehensive C++ library implementing common data structures and algorithms with detailed documentation.',
      link: 'https://github.com/Kenenisaboru/Data-structure-and-Algorithm',
      tech: ['C++', 'STL', 'Algorithms', 'Data Structures', 'Unit Testing'],
      type: 'Algorithm',
      icon: <FaGraduationCap />,
      status: 'Completed',
      highlights: ['Performance benchmarks', 'Detailed docs', 'Test cases']
    }
  ];

  // Featured Repositories
  const featuredRepositories = [
    {
      title: 'Hospital Management System',
      description: 'Developed the frontend interface for a hospital management system using React and Tailwind CSS.',
      link: 'https://github.com/Kenenisaboru/Hospital-management-system',
      contributions: ['Built responsive patient management interface', 'Implemented real-time updates', 'Enhanced user experience'],
      tech: ['React', 'Tailwind CSS', 'JavaScript']
    },
  ];

  // Awards and Certifications
  const awards = [
    {
      title: 'Voice of HRU — Hackathon Winner',
      org: 'Haramaya University Hackathon — 2026',
      desc: 'Developed an innovative student feedback management system that won recognition for its potential to improve campus communication and administrative efficiency.',
      icon: <FaAward />,
      image: null,
      type: 'hackathon',
      date: 'April 2026',
      verification: 'https://student-complain-voice-complain-platform.onrender.com',
      skills: ['MERN Stack', 'Problem Solving', 'UI/UX Design', 'Full-Stack Development']
    },
    {
      title: 'In-Depth Data Structure & Algorithm',
      org: 'Intensive Training Program — 2026',
      desc: 'Successfully completed 45 days of intensive training in advanced data structures and algorithmic problem-solving.',
      icon: <FaGraduationCap />,
      image: dsaCert,
      type: 'certificate',
      date: 'April 2026',
      verification: '#',
      skills: ['JavaScript', 'Data Structures', 'Algorithms', 'Optimization']
    },
    {
      title: 'East Ethiopian Cursor Hackathon Finalist',
      org: 'East Ethiopian Hackathon — 2026',
      desc: 'Top 6 finalist for building "LifeLink", an innovative mobile application solution.',
      icon: <FaAward />,
      image: hackathonCert,
      type: 'hackathon',
      date: 'April 2026',
      verification: '#',
      skills: ['Mobile Development', 'React Native', 'Problem Solving']
    },
    {
      title: 'Full-Stack Web Development Intern',
      org: 'CodeAlpha — 2026',
      desc: 'Completed an intensive remote internship focusing on real-world web applications, enhancing skills in modern frontend and backend frameworks.',
      icon: <FaLaptopCode />,
      image: codeAlphaCert,
      type: 'internship',
      date: 'May 2026',
      verification: '#',
      skills: ['React', 'Node.js', 'Team Collaboration', 'Full-Stack Development']
    },
    {
      title: 'Web Development Excellence Award',
      org: 'HUCCISA — 2024',
      desc: 'Recognized for outstanding performance and innovation in modern web development practices.',
      icon: <FaCertificate />,
      image: hucissaCert,
      type: 'certificate',
      date: 'December 2024',
      verification: '#',
      skills: ['React', 'Node.js', 'Full-Stack Development']
    },
    {
      title: 'Hackathon Participant - Finance App',
      org: 'Zemenay Hackathon — 2025',
      desc: 'Best competitor in a finance app hackathon.',
      icon: <FaAward />,
      image: zemenayCert,
      type: 'hackathon',
      date: 'September 2025',
      verification: '#',
    },
    {
      title: 'Frontend Development Certification',
      org: 'freeCodeCamp — 2024',
      desc: 'Certified Frontend Developer with comprehensive projects in responsive design and JavaScript.',
      icon: <FaCode />,
      image: null,
      type: 'certificate',
      date: 'November 2024',
      verification: 'https://freecodecamp.org/certification',
      skills: ['Responsive Design', 'JavaScript', 'Web Accessibility']
    },
    {
      title: 'Introduction to Web Development',
      org: 'HUCCISA — 2025',
      desc: 'Completed intensive web development course covering HTML5, CSS3, JavaScript.',
      icon: <FaCertificate />,
      image: hucissaCert,
      type: 'certificate',
      date: 'July 2025',
      verification: '#',
      skills: ['HTML5', 'CSS3', 'JavaScript Basics']
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '15+', icon: <FaRocket /> },
    { label: 'Years Experience', value: '2+', icon: <FaCalendarAlt /> },
    { label: 'Technologies', value: '12+', icon: <FaCode /> },
    { label: 'GitHub Repositories', value: '30+', icon: <FaGithub /> },
    { label: 'Code Commits', value: '1350+', icon: <FaDatabase /> },
    { label: 'Certifications', value: '6+', icon: <FaCertificate /> }
  ];

  const personalInfo = {
    location: 'Haramaya University, Harar',
    availability: 'Available for full-time & freelance',
    experience: '2+ years in web development',
    education: 'BSc in Information Science'
  };

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(tagline.slice(0, index + 1));
      index += 1;
      if (index === tagline.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [tagline, isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }

      const sections = ['about', 'skills', 'projects', 'opensource', 'awards', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current.disconnect();
  }, [isLoading]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const openImageModal = (imageSrc, title = 'Certificate') => {
    setSelectedImage({ src: imageSrc, title });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader-content">
          <div className="loader-spinner"></div>
          <h2 className="loader-name">Kenenisa Boru</h2>
          <p className="loader-subtitle">Full-Stack Developer</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <CertificateModal selectedImage={selectedImage} onClose={closeImageModal} />
      <ScrollToTopButton visible={scrollVisible} onClick={scrollToTop} />

      <Header
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
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
        onOpenImageModal={openImageModal}
      />

      <Skills skills={skills} bgImage={skillsBg} />

      <Projects projects={projects} />

      <OpenSource contributions={featuredRepositories} />

      <Awards awards={awards} onOpenImageModal={openImageModal} />

      <Contact />

      <Footer onScrollToSection={scrollToSection} />
    </div>
  );
};

export default App;