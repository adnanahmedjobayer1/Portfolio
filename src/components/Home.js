// src/components/Home.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from "react-awesome-reveal";
import { FaArrowRight } from 'react-icons/fa';

import profileImage from '../images/profile.png'; // আপনার ছবি assets ফোল্ডারে রাখুন

function Home() {
  return (
    <section id="home" className="home-section d-flex align-items-center mt-4">
      <Container>
        <Row className="align-items-center">
          {/* বাম দিকের টেক্সট কন্টেন্ট */}
          <Col md={7} className="home-intro">
            <Fade direction="left" triggerOnce>
              <h1 className="display-4 fw-bold">
              <span className="highlight">আদনান আহমেদ </span>
              </h1>
              <h2 className="mb-4 workTopic">
                <TypeAnimation
                  sequence={[
                    'Web Developer',
                    2000,
                    'Graphic Designer',
                    2000,
                    'Freelancer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="type-animation-text"
                  repeat={Infinity}
                />
              </h2>
              <p className="lead mb-4">
                আমি আধুনিক ওয়েব টেকনোলজি ব্যবহার করে আকর্ষণীয় এবং রেসপন্সিভ ওয়েবসাইট তৈরি করি। ব্যবহারকারীর অভিজ্ঞতাকে সুন্দর করাই আমার মূল লক্ষ্য।
              </p>
              <div className="cta-buttons">
                <Link to="projects" smooth={true} duration={500} offset={-70}>
                  <Button variant="primary" size="lg" className="me-3 cta-button mb-3">
                    আমার প্রজেক্টস <FaArrowRight className="ms-2" />
                  </Button>
                </Link>
                {/* আপনার সিভি ফাইলের লিঙ্ক এখানে দিন */}
                <a href="/path-to-your-cv.pdf" download>
                  <Button variant="outline-primary" size="lg" className="cta-button">
                    সিভি ডাউনলোড
                  </Button>
                </a>
              </div>
            </Fade>
          </Col>

          {/* ডান দিকের ছবি */}
          <Col md={5} className="text-center   ">
            <Fade direction="right" triggerOnce>
              <img 
                src={profileImage} 
                alt="আপনার প্রোফাইল ছবি" 
                className="img-fluid profile-img"
              />
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;