// src/components/About.js

import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { FaAward, FaBriefcase, FaUsers } from 'react-icons/fa';
import aboutImage from '../images/about-image.jpg';

// ডেটা অপরিবর্তিত রাখা হয়েছে, তবে আইকনে aria-hidden যোগ করা হয়েছে
const statsData = [
  { icon: <FaBriefcase aria-hidden="true" />, value: '৩+', label: 'বছরের অভিজ্ঞতা' },
  { icon: <FaAward aria-hidden="true" />, value: '৫০+', label: 'প্রজেক্ট সম্পন্ন' },
  { icon: <FaUsers aria-hidden="true" />, value: '৩০+', label: 'সন্তুষ্ট ক্লায়েন্ট' },
];

// আপনার কাজের অভিজ্ঞতা এবং শিক্ষাগত যোগ্যতার তথ্য (অপরিবর্তিত)
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


function About() {
  const [activeTab, setActiveTab] = useState('experience');

  const renderContent = () => { /* ... এই অংশ অপরিবর্তিত ... */ };
  
  // renderContent ফাংশনটি যেহেতু বড়, তাই এখানে পুনরায় লেখা হলো না। 
  // উপরের কোড থেকে এই ফাংশনটি অপরিবর্তিত থাকবে।

  return (
    // পরিবর্তন ১: Accessibility-র জন্য aria-labelledby যোগ করা হলো
    <section id="about" className="about-section" aria-labelledby="about-section-title">
      <Container>
        <Fade direction="up" triggerOnce>
          <h2 id="about-section-title" className="section-title text-center mb-5">আমার সম্পর্কে</h2>
        </Fade>
        <Row className="align-items-center">
          <Col lg={5} className="mb-5 mb-lg-0">
            <Fade direction="up" triggerOnce>
              <div className="about-image-container">
                {/* পরিবর্তন ২: ছবির alt টেক্সট আরও তথ্যপূর্ণ করা হলো */}
                <Image src={aboutImage} alt="ওয়েব ডেভেলপার আদনান আহমেদ যুবায়ের" className="about-image" />
              </div>
            </Fade>
          </Col>
          <Col lg={7}>
            <Fade direction="right" triggerOnce>
              {/* পরিবর্তন ৩: বিবরণে কিওয়ার্ড (আপনার নাম) যোগ করা হলো */}
              <p className="about-description">
                আমি <strong>আদনান আহমেদ যুবায়ের</strong>, একজন সৃজনশীল এবং ফলাফল-কেন্দ্রিক ওয়েব ডেভেলপার। আমার লক্ষ্য হলো ব্যবহারকারীর জন্য সহজ, সুন্দর এবং কার্যকরী ডিজিটাল অভিজ্ঞতা তৈরি করা। আমি বিশ্বাস করি, প্রযুক্তির সঠিক ব্যবহার মানুষের জীবনকে আরও সহজ করে তুলতে পারে এবং আমি সেই যাত্রার একজন অংশ হতে পেরে গর্বিত।
              </p>
              
              <div className="about-stats">
                {statsData.map((stat, index) => (
                  <div className="stat-card" key={index}>
                    <div className="stat-icon">{stat.icon}</div>
                    <h3 className="stat-value">{stat.value}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="tab-buttons">
                <button className={`tab-link ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}>অভিজ্ঞতা</button>
                <button className={`tab-link ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>শিক্ষা</button>
              </div>

              <div className="tab-content">
              <ul className="timeline">
            { (activeTab === 'experience' ? experienceData : educationData).map((item, index) => (
              <li key={index}>
                <span className="timeline-year">{item.year}</span>
                {item.role ? (
                  <h5 className="timeline-role">{item.role} - <span className="timeline-company">{item.company}</span></h5>
                ) : (
                  <h5 className="timeline-role">{item.degree}</h5>
                )}
                {item.institution && <p className="timeline-institution">{item.institution}</p>}
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;