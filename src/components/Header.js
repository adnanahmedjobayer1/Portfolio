// src/components/Header.js

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'; // Button ইম্পোর্ট করুন
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-scroll';
import { 
  FaHome, FaUser, FaLaptopCode, FaTools, FaEnvelope, 
  FaSun, FaMoon 
} from 'react-icons/fa';
import '../App.css'; 

function Header({ onThemeToggle, theme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`transition-navbar ${scrolled ? "navbar-scrolled" : ""} ${theme === 'dark' ? 'navbar-dark-custom' : 'navbar-light-custom'}`}
      // Accessibility এর জন্য role এবং aria-label যোগ করা হলো
      role="navigation"
      aria-label="Main navigation"
    >
      <Container>
        <Fade direction="left" triggerOnce>
          {/* পরিবর্তন ১: ব্র্যান্ডের নামে পূর্ণ নাম ব্যবহার */}
          <Navbar.Brand as={Link} to="home" smooth={true} duration={500} style={{ cursor: 'pointer' }} className="fw-bold nav-brand">
            {'আদনান আহমেদ'}
          </Navbar.Brand>
        </Fade>
        
        <div className="d-flex align-items-center">
           {/* পরিবর্তন ২: থিম টগল বাটনকে আরও Accessible করা */}
          <Button
            onClick={onThemeToggle}
            className="theme-toggle-btn me-3" // কাস্টম ক্লাস দেওয়া হলো
            aria-label={theme === 'dark' ? 'সিস্টেম লাইট থিমে পরিবর্তন করুন' : 'সিস্টেম ডার্ক থিমে পরিবর্তন করুন'}
          >
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
          </Button>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navItem">
             {/* পরিবর্তন ৩: আইকনগুলোকে ডেকোরেটিভ হিসেবে মার্ক করা */}
            <Nav.Link as={Link} activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} className="m-1">
              <FaHome className="me-2" aria-hidden="true" /> হোম
            </Nav.Link>
            <Nav.Link as={Link} activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="m-1">
              <FaUser className="me-2" aria-hidden="true" /> সম্পর্কে
            </Nav.Link>
            <Nav.Link as={Link} activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500} className="m-1">
              <FaTools className="me-2" aria-hidden="true" /> দক্ষতা
            </Nav.Link>
            <Nav.Link as={Link} activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500} className="m-1">
              <FaLaptopCode className="me-2" aria-hidden="true" /> প্রজেক্টস
            </Nav.Link>
            <Nav.Link as={Link} activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="m-1">
              <FaEnvelope className="me-2" aria-hidden="true" /> যোগাযোগ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;