// src/components/Footer.js

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTiktok, FaWhatsapp, FaArrowUp } from 'react-icons/fa'; // Updated imports for new icons

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // স্ক্রল পজিশন চেক করে বাটন দেখানো বা লুকানোর ফাংশন
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // পেজের একেবারে উপরে স্ক্রল করার ফাংশন
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <footer className="footer-section">
        <Container>
          <Row className="align-items-center">
            <Col size={12} className="text-center">
              <div className="footer-social-icons">
                {/* Facebook Link */}
                <a href="https://www.facebook.com/adnanahmedjobayer" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
                {/* TikTok Link */}
                <a href="https://www.tiktok.com/@adnanahmedjobayer" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
                {/* WhatsApp Link */}
                <a href="https://wa.me/8801310025022" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              </div>
              <div className="footer-nav-links">
                 <a href="#home">হোম</a>
                 <a href="#about">পরিচিতি</a>
                 <a href="#projects">প্রজেক্টস</a>
                 <a href="#contact">যোগাযোগ</a>
              </div>
              <p className="copyright-text">
                © {new Date().getFullYear()} আপনার নাম। সর্বস্বত্ব সংরক্ষিত।
              </p>
              <p className="made-with-text">
                রিঅ্যাক্ট ও ভালোবাসার সাথে তৈরি ❤️
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* উপরে ফিরে যান বাটন */}
      <button 
        className={`back-to-top-btn ${isVisible ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="উপরে ফিরে যান"
      >
        <FaArrowUp />
      </button>
    </>
  );
}

export default Footer;
