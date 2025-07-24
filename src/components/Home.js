// src/components/Home.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from "react-awesome-reveal";
import { FaArrowRight } from 'react-icons/fa';

import profileImage from '../images/profile.png'; // আপনার প্রোফাইল ছবি

function Home() {
  return (
    <section id="home" className="home-section d-flex align-items-center mt-4" aria-labelledby="main-heading">
      <Container>
        <Row className="align-items-center">
          {/* বাম দিকের টেক্সট কন্টেন্ট */}
          <Col md={7} className="home-intro">
            <Fade direction="left" triggerOnce>
              {/* পরিবর্তন ১: h1 ট্যাগকে আপনার পূর্ণ নাম দিয়ে শক্তিশালী করা */}
              <h1 id="main-heading" className="display-4 fw-bold">
                <span className="highlight">আদনান আহমেদ</span>
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
                    আমার প্রজেক্টস <FaArrowRight className="ms-2" aria-hidden="true" />
                  </Button>
                </Link>
                {/* পরিবর্তন ২: সিভি ডাউনলোড লিঙ্ক সেট করা */}
                {/* নির্দেশিকা: আপনার CV ফাইলটি public ফোল্ডারের মধ্যে রাখুন */}
                <a href="/Adnan_Ahmed_Jobayer_CV.pdf" download>
                  <Button variant="outline-primary" size="lg" className="cta-button">
                    সিভি ডাউনলোড
                  </Button>
                </a>
              </div>
            </Fade>
          </Col>

          {/* ডান দিকের ছবি */}
          <Col md={5} className="text-center">
            <Fade direction="right" triggerOnce>
              {/* পরিবর্তন ৩: ছবির alt টেক্সটকে আরও তথ্যপূর্ণ করা */}
              <img 
                src={profileImage} 
                alt="আদনান আহমেদ যুবায়ের, রিঅ্যাক্ট ডেভেলপার" 
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