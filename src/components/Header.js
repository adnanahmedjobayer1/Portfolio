// src/components/Header.js

import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-scroll';
import { 
  FaHome, FaUser, FaLaptopCode, FaTools, FaEnvelope, 
  FaSun, FaMoon // থিম আইকন ইম্পোর্ট করা হয়েছে
} from 'react-icons/fa';
import '../App.css'; // কাস্টম স্টাইলের জন্য CSS ফাইল

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
      theme="dark"
      expand="lg"
      fixed="top"
      // নিচের className এ একটি পরিবর্তন আনা হয়েছে
      className={`transition-navbar ${scrolled ? "navbar-scrolled" : ""} ${theme === 'dark' ? 'navbar-dark-custom' : 'navbar-light-custom'}`}
    >
      <Container>
        {/* ব্র্যান্ড লোগো */}
      <Fade direction="left" triggerOnce>
        <Navbar.Brand as={Link} to="home" smooth={true} duration={500} style={{ cursor: 'pointer' }} className="fw-bold nav-brand">
          {'আদনান আহমেদ'}
        </Navbar.Brand>
</Fade>
        {/* পরিবর্তন: ডানদিকের কন্ট্রোলস (থিম টগল এবং মেনু টগল) */}
        <div className="d-flex align-items-center">
          {/* থিম টগল বাটন - এটি Navbar.Collapse এর বাইরে, তাই ছোট স্ক্রিনেও দেখা যাবে */}
          <Nav.Link 
            onClick={onThemeToggle} 
            className="theme-icon-link me-3" // me-3 ক্লাস দিয়ে মেনু বাটন থেকে দূরত্ব তৈরি করা হয়েছে
            style={{ cursor: 'pointer' }}
          >
            {/* থিমের ওপর ভিত্তি করে আইকন পরিবর্তন হবে */}
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
          </Nav.Link>

          {/* হ্যামবার্গার মেনু টগলার */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        </div>

        {/* নেভিগেশন লিঙ্কগুলো যা ছোট স্ক্রিনে কলাপ্স হবে */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navItem">
            <Nav.Link as={Link} activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} className="m-1">
              <FaHome className="me-4"/> হোম
            </Nav.Link>
            <Nav.Link as={Link} activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="m-1">
              <FaUser className="me-4" /> সম্পর্কে
            </Nav.Link>
            <Nav.Link as={Link} activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500} className="m-1">
              <FaTools className="me-4" /> দক্ষতা
            </Nav.Link>
            <Nav.Link as={Link} activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500} className="m-1">
              <FaLaptopCode className="me-4" /> প্রজেক্টস
            </Nav.Link>
            <Nav.Link as={Link} activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="m-1">
              <FaEnvelope className="me-4" /> যোগাযোগ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;