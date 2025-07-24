// src/components/Footer.js

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// **การเปลี่ยนแปลงที่ 1: นำเข้า Link จาก react-scroll**
import { Link } from 'react-scroll';
import { FaFacebook, FaTiktok, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

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
      {/* **การเปลี่ยนแปลงที่ 2: เพิ่ม role="contentinfo"** */}
      <footer className="footer-section" role="contentinfo">
        <Container>
          <Row className="align-items-center">
            <Col size={12} className="text-center">
              {/* **การเปลี่ยนแปลงที่ 3: เพิ่ม Heading สำหรับ Accessibility** */}
              <h2 className="visually-hidden">সাইটের ফুটার এবং সোশ্যাল লিঙ্ক</h2>

              <div className="footer-social-icons">
                <a href="https://www.facebook.com/adnanahmedjobayer" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
                <a href="https://www.tiktok.com/@adnanahmedjobayer" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
                <a href="https://wa.me/8801310025022" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              </div>
              
              <div className="footer-nav-links">
                 {/* **การเปลี่ยนแปลงที่ 4: ใช้ Link component เพื่อการเลื่อนที่ราบรื่น** */}
                 <Link to="home" smooth={true} duration={500}>হোম</Link>
                 <Link to="about" smooth={true} duration={500} offset={-70}>পরিচিতি</Link>
                 <Link to="projects" smooth={true} duration={500} offset={-70}>প্রজেক্টস</Link>
                 <Link to="contact" smooth={true} duration={500} offset={-70}>যোগাযোগ</Link>
              </div>

              {/* **การเปลี่ยนแปลงที่ 5: อัปเดตชื่อในข้อความลิขสิทธิ์** */}
              <p className="copyright-text">
                © {new Date().getFullYear()} আদনান আহমেদ যুবায়ের। সর্বস্বত্ব সংরক্ষিত।
              </p>
              <p className="made-with-text">
                রিঅ্যাক্ট ও ভালোবাসার সাথে তৈরি ❤️
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* ปุ่มกลับไปด้านบน (ไม่มีการเปลี่ยนแปลง แต่สมบูรณ์แบบแล้ว) */}
      <button 
        className={`back-to-top-btn ${isVisible ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="উপরে ফিরে যান"
      >
        <FaArrowUp aria-hidden="true" />
      </button>
    </>
  );
}

export default Footer;