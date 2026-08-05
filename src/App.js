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
  FaUsers,
  FaTrophy
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

  const tagline = 'Full-Stack Developer & Hackathon Competitor specializing in React, Node.js, MERN stack, and modern mobile-first web applications.';

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
      featured: true,
      highlights: [
        'Hackathon Winning Project for Haramaya University',
        'Real-time status updates & Admin analytics dashboard',
        'Serving 500+ active student feedback requests'
      ]
    },
    {
      title: 'LifeLink — Emergency Healthcare App',
      desc: 'Innovative mobile health application developed for the East Ethiopian Cursor Hackathon. Designed to connect patients rapidly with emergency services and nearby hospitals.',
      link: 'https://github.com/Kenenisaboru',
      tech: ['React Native', 'Node.js', 'Express', 'Geolocation', 'REST API'],
      type: 'Mobile / Hackathon',
      icon: <FaTrophy />,
      status: 'Completed',
      featured: true,
      highlights: [
        'East Ethiopian Cursor Hackathon Top 6 Finalist',
        'Real-time emergency dispatch tracking & instant alert dispatch',
        'Mobile-first responsive architecture'
      ]
    },
    {
      title: 'Hospital Management System',
      desc: 'A comprehensive full-stack hospital management system with patient management, doctor scheduling, medical records, and billing integration.',
      link: 'https://github.com/Kenenisaboru/Hospital-management-system',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'REST API', 'JWT', 'Redux'],
      type: 'Full-Stack',
      icon: <FaHospital />,
      status: 'Completed',
      featured: true,
      highlights: [
        'Secure multi-role authentication (Admin, Doctor, Patient)',
        'Complex MySQL relational database schema optimization',
        'Built for enterprise healthcare workflows'
      ]
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
        'Optimized PWA caching for offline accessibility',
        'Cross-platform installation on Mobile & Desktop'
      ]
    },
    {
      title: 'Frontend Tricks Collection',
      desc: 'Curated collection of modern frontend techniques, smooth animations, dynamic UI components, and web layout best practices.',
      link: 'https://github.com/Kenenisaboru/All-my-frontend-trick',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Animations', 'Responsive Design'],
      type: 'Frontend',
      icon: <FaLaptopCode />,
      status: 'Ongoing',
      highlights: ['Reusable animated components', 'Performance optimizations', 'CSS Grid & Flexbox patterns']
    },
    {
      title: 'Data Structure & Algorithm Library',
      desc: 'Comprehensive C++ library implementing essential data structures, sorting algorithms, and graph traversals with unit tests.',
      link: 'https://github.com/Kenenisaboru/Data-structure-and-Algorithm',
      tech: ['C++', 'STL', 'Algorithms', 'Data Structures', 'Unit Testing'],
      type: 'Algorithm',
      icon: <FaGraduationCap />,
      status: 'Completed',
      highlights: ['Performance benchmark tests', 'In-depth algorithm documentation', 'Optimized time complexity']
    }
  ];

  // Featured Repositories (Actual Completed Projects)
  const featuredRepositories = [
    {
      title: 'Voice of HRU — Student Complaint Platform',
      description: 'A comprehensive feedback and complaint management system for Haramaya University students. Built with MERN stack & Socket.io for real-time admin updates.',
      link: 'https://github.com/Kenenisaboru/-Student-complain-Voice-of-HRU',
      contributions: [
        'Built full-stack React & Node.js architecture with JWT authentication',
        'Integrated Socket.io for real-time notification dispatch',
        'Deployed live web application serving 500+ active students'
      ],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT']
    },
    {
      title: 'Hospital Management System',
      description: 'Full-stack enterprise hospital administration solution with patient records, doctor scheduling, medical history tracking, and role-based access control.',
      link: 'https://github.com/Kenenisaboru/Hospital-management-system',
      contributions: [
        'Designed normalized MySQL database relational schema',
        'Implemented secure multi-role auth (Admin, Doctor, Patient)',
        'Created intuitive responsive dashboard interface using React'
      ],
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'REST API', 'Redux']
    },
    {
      title: 'Aseko Students Platform — Community Hub',
      description: 'Cross-platform PWA networking application connecting 300+ students for resource sharing and communication.',
      link: 'https://github.com/Kenenisaboru/student-platform',
      contributions: [
        'Built Progressive Web App (PWA) supporting offline access',
        'Integrated Firebase real-time chat and document sharing',
        'Designed mobile-first UI with Tailwind CSS'
      ],
      tech: ['React', 'Firebase', 'PWA', 'Tailwind CSS']
    },
    {
      title: 'Frontend Tricks Collection',
      description: 'Curated library of advanced CSS/JS UI components, micro-animations, and responsive layout patterns.',
      link: 'https://github.com/Kenenisaboru/All-my-frontend-trick',
      contributions: [
        'Implemented reusable interactive UI animation snippets',
        'Optimized CSS rendering performance & responsive breakpoints',
        'Documented clean code patterns for modern web development'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP']
    },
    {
      title: 'Data Structure & Algorithm Library',
      description: 'High-performance C++ implementation of essential algorithms and data structures with unit tests and benchmark analysis.',
      link: 'https://github.com/Kenenisaboru/Data-structure-and-Algorithm',
      contributions: [
        'Implemented graph traversals, sorting, and tree algorithms in C++',
        'Wrote comprehensive unit test suite and time-complexity docs',
        'Benchmarked algorithmic efficiency'
      ],
      tech: ['C++', 'Algorithms', 'Data Structures', 'STL']
    }
  ];

  // Awards and Certifications
  const awards = [
    {
      title: 'Best Hackathons Competitor',
      org: 'Haramaya University Hackathon — 2026',
      desc: 'Recognized as the best competitor among many developers for building an innovative student feedback management system.',
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