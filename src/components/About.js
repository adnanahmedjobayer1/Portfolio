// src/components/About.js

import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { FaAward, FaBriefcase, FaUsers } from 'react-icons/fa';
import aboutImage from '../images/about-image.jpg'; // assets ফোল্ডারে আপনার ছবি রাখুন

// আপনার কাজের অভিজ্ঞতা এবং শিক্ষাগত যোগ্যতার তথ্য
const experienceData = [
  {
    year: '২০২২ - বর্তমান',
    role: 'জুনিয়র ওয়েব ডেভেলপার',
    company: 'ছোট ছোট প্রজেক্টে কাজ করি',
    desc: 'কিছু ক্লায়েন্টের জন্য পোর্টফলিও , ব্লগার সাইটের পাশাপাশি আরাও কিছু কাজ করি।'
  },
  {
    year: '২০২০ - ২০২২',
    role: 'স্কিল বিল্ড করতে থাকি',
    company: 'নিজের জন্য একটা ওয়েনঅ্যাপ বানানোর কাজ করি',
    desc: 'html,css,bootstrap, javascript শিখার পর ব্যাকেন্ড হিসেবে (php , mysql )  শিখা শুরু করি।'
  }
];

const educationData = [
    {
    year: '২০১৪- ২০১৯',
    degree: 'উচ্চ মাধ্যমিক স্কুল সার্টিফিকেট (HSC)',
    institution: 'থানার হাট মডেল হাই স্কুল',
    desc: 'পড়ালেখার পাশাপাশি প্রোগ্রামিং শিখা শুরু করি, '
  },
  {
    year: '২০০৯ - ২০১৪',
    degree: 'প্রাইমারি স্কুল সার্টিফিকেট ',
    institution: 'থানার হাট সরকারি প্রাথমিক বিদ্যালয় ',
    desc: 'প্রোগ্রামিং এর প্রতি আগ্রহ আসে, ভালো লাগা কাজ করি'
  }

];

// তথ্যবহুল কার্ডের জন্য ডেটা
const statsData = [
  { icon: <FaBriefcase />, value: '৩+', label: 'বছরের অভিজ্ঞতা' },
  { icon: <FaAward />, value: '৫০+', label: 'প্রজেক্ট সম্পন্ন' },
  { icon: <FaUsers />, value: '৩০+', label: 'সন্তুষ্ট ক্লায়েন্ট' },
];

function About() {
  const [activeTab, setActiveTab] = useState('experience');

  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return (
          <ul className="timeline">
            {experienceData.map((exp, index) => (
              <li key={index}>
                <span className="timeline-year">{exp.year}</span>
                <h5 className="timeline-role">{exp.role} - <span className="timeline-company">{exp.company}</span></h5>
                <p>{exp.desc}</p>
              </li>
            ))}
          </ul>
        );
      case 'education':
        return (
          <ul className="timeline">
            {educationData.map((edu, index) => (
              <li key={index}>
                <span className="timeline-year">{edu.year}</span>
                <h5 className="timeline-role">{edu.degree}</h5>
                <p className="timeline-institution">{edu.institution}</p>
                <p>{edu.desc}</p>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="about-section">
      <Container>
        <Fade direction="up" triggerOnce>
          <h2 className="section-title text-center mb-5 ">আমার সম্পর্কে </h2>
        </Fade>
        <Row className="align-items-center">
          <Col lg={5} className="mb-5 mb-lg-0">
            <Fade direction="up" triggerOnce>
              <div className="about-image-container">
                <Image src={aboutImage} alt="আপনার ছবি" className="about-image" />
              </div>
            </Fade>
          </Col>
          <Col lg={7}>
            <Fade direction="right" triggerOnce>
              <p className="about-description">
                আমি একজন সৃজনশীল এবং ফলাফল-কেন্দ্রিক ওয়েব ডেভেলপার। আমার লক্ষ্য হলো ব্যবহারকারীর জন্য সহজ, সুন্দর এবং কার্যকরী ডিজিটাল অভিজ্ঞতা তৈরি করা। আমি বিশ্বাস করি, প্রযুক্তির সঠিক ব্যবহার মানুষের জীবনকে আরও সহজ করে তুলতে পারে এবং আমি সেই যাত্রার একজন অংশ হতে পেরে গর্বিত।
              </p>
              
              {/* তথ্যবহুল কার্ড */}
              <div className="about-stats">
                {statsData.map((stat, index) => (
                  <div className="stat-card" key={index}>
                    <div className="stat-icon">{stat.icon}</div>
                    <h3 className="stat-value">{stat.value}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* ট্যাব বাটন */}
              <div className="tab-buttons">
                <button className={`tab-link ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}>অভিজ্ঞতা</button>
                <button className={`tab-link ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>শিক্ষা</button>
              </div>

              {/* ট্যাব কনটেন্ট */}
              <div className="tab-content">
                {renderContent()}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;