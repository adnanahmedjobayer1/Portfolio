// src/components/Projects.js

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { FaLink, FaGithub } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";

// আপনার প্রজেক্টের ছবিগুলো `src/assets/projects/` ফোল্ডারে রাখুন
import projImg1_1 from '../images/project1.png';
import projImg1_2 from '../images/project2.png';
import projImg2_1 from '../images/project.png';
import projImg3_1 from '../images/project2.png';

// --- প্রজেক্ট ডেটা ---
const projectsData = [
  {
    id: 1,
    title: 'ই-কমার্স প্ল্যাটফর্ম',
    shortDescription: 'একটি আধুনিক ও সম্পূর্ণ বৈশিষ্ট্যযুক্ত ই-কমার্স ওয়েবসাইট।',
    detailedDescription: 'এই প্রজেক্টটি MERN স্ট্যাক ব্যবহার করে তৈরি করা হয়েছে। এখানে প্রোডাক্ট ম্যানেজমেন্ট, ইউজার অথেনটিকেশন, পেমেন্ট গেটওয়ে ইন্টিগ্রেশন এবং অ্যাডমিন ড্যাশবোর্ডের মতো ফিচার রয়েছে। ব্যবহারকারীর অভিজ্ঞতাকে সর্বোচ্চ গুরুত্ব দেওয়া হয়েছে।',
    images: [projImg1_1, projImg1_2],
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    liveLink: '#',
    githubLink: '#',
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'পার্সোনাল পোর্টফোলিও',
    shortDescription: 'রিঅ্যাক্ট দিয়ে তৈরি একটি সৃজনশীল এবং রেসপন্সিভ পোর্টফোলিও।',
    detailedDescription: 'এটি একটি সিঙ্গেল পেজ অ্যাপ্লিকেশন (SPA) যা React, React-Bootstrap এবং Framer Motion ব্যবহার করে তৈরি। এতে একটি ডার্ক/লাইট থিম, স্মুথ স্ক্রল এবং আকর্ষণীয় অ্যানিমেশন যোগ করা হয়েছে।',
    images: [projImg2_1],
    tags: ['React', 'Bootstrap', 'CSS', 'Framer Motion'],
    liveLink: '#',
    githubLink: '#',
    category: 'frontend',
  },
  {
    id: 3,
    title: 'ব্লগিং অ্যাপ',
    shortDescription: 'Node.js এবং EJS দিয়ে নির্মিত একটি সাধারণ ব্লগিং প্ল্যাটফর্ম।',
    detailedDescription: 'এটি একটি সার্ভার-সাইড রেন্ডারড অ্যাপ্লিকেশন। ব্যবহারকারীরা পোস্ট তৈরি, এডিট এবং ডিলিট করতে পারে। Markdown সাপোর্ট এবং কমেন্টিং সিস্টেমও যোগ করা হয়েছে।',
    images: [projImg3_1],
    tags: ['Node.js', 'EJS', 'MongoDB', 'CSS'],
    liveLink: '#',
    githubLink: '#',
    category: 'backend',
  },
];

const filterCategories = [
  { key: 'all', name: 'সব' },
  { key: 'frontend', name: 'ফ্রন্টএন্ড' },
  { key: 'backend', name: 'ব্যাকএন্ড' },
  { key: 'fullstack', name: 'ফুল-স্ট্যাক' },
];

// --- নতুন প্রজেক্ট কার্ড কম্পোনেন্ট ---
const ProjectCard = ({ project, isExpanded, onToggle }) => {
  return (
    <div className={`project-card-wrapper ${isExpanded ? 'expanded' : ''}`}>
      {/* --- কার্ডের উপরের অংশ (ক্লিক করা যাবে) --- */}
      <div className="project-summary" onClick={onToggle}>
        <img src={project.images[0]} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <h5 className="project-title">{project.title}</h5>
          <p className="project-short-desc">{project.shortDescription}</p>
          <div className="expand-icon-container">
             <IoIosArrowDown className={`expand-icon ${isExpanded ? 'rotated' : ''}`} />
          </div>
        </div>
      </div>

      {/* --- কার্ডের বিস্তারিত অংশ (প্রসারিত হলে দেখা যাবে) --- */}
      <div className="project-details-container">
        <div className="project-details-content">
          <Row>
            <Col md={7}>
              <Carousel interval={null} className="project-carousel">
                {project.images.map((img, index) => (
                  <Carousel.Item key={index}>
                    <img className="d-block w-100" src={img} alt={`Slide ${index}`} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col md={5} className="d-flex flex-column justify-content-center">
                <h5 className="mt-4 mt-md-0">ব্যবহৃত প্রযুক্তি:</h5>
                <div className="project-tags">
                {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
                </div>
                <h5 className="mt-4">বিস্তারিত:</h5>
                <p className="modal-description">{project.detailedDescription}</p>
                <div className="project-links mt-auto">
                    <Button variant="outline-secondary" href={project.githubLink} target="_blank">
                        <FaGithub className="me-2" /> কোড দেখুন
                    </Button>
                    <Button variant="primary" href={project.liveLink} target="_blank">
                        <FaLink className="me-2" /> লাইভ ডেমো
                    </Button>
                </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};


// --- মূল কম্পোনেন্ট: Projects ---
function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [expandedProjectId, setExpandedProjectId] = useState(null); // নতুন state

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter((p) => p.category === activeFilter));
    }
    setExpandedProjectId(null); // ফিল্টার পরিবর্তন হলে খোলা কার্ড বন্ধ হয়ে যাবে
  }, [activeFilter]);

  // কোন কার্ড খুলবে বা বন্ধ হবে তা নিয়ন্ত্রণ করার ফাংশন
  const handleToggleDetails = (projectId) => {
    setExpandedProjectId(currentId => (currentId === projectId ? null : projectId));
  };

  return (
    <section id="projects" className="projects-section">
      <Container>
        <Fade direction="up" triggerOnce>
          <h2 className="section-title text-center mb-5">আমার নির্বাচিত কাজ</h2>
        </Fade>
        <div className="filter-buttons text-center mb-5">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.key)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <Row className="justify-content-center">
          {filteredProjects.map((project) => (
            <Col lg={10} md={12} className="mb-4" key={project.id}>
              <Fade direction="up" triggerOnce delay={project.id * 100}>
                <ProjectCard
                  project={project}
                  isExpanded={expandedProjectId === project.id}
                  onToggle={() => handleToggleDetails(project.id)}
                />
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;