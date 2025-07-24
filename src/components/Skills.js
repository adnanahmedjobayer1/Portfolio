// src/components/Skills.js

import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import VanillaTilt from 'vanilla-tilt';

// আইকনগুলো ইম্পোর্ট করুন
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaPhp, FaNodeJs } from 'react-icons/fa';
import { SiJquery, SiMysql, SiMongodb } from 'react-icons/si';

// পরিবর্তন ১: আইকনগুলোকে ডেকোরেটিভ হিসেবে মার্ক করতে aria-hidden="true" যোগ করা হলো
const skillCategories = {
  'ফ্রন্টএন্ড': [
    { name: 'HTML5', icon: <FaHtml5 aria-hidden="true" />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt aria-hidden="true" />, color: '#1572B6' },
    { name: 'Bootstrap', icon: <FaBootstrap aria-hidden="true" />, color: '#7952B3' },
    { name: 'JavaScript', icon: <FaJsSquare aria-hidden="true" />, color: '#F7DF1E' },
    { name: 'jQuery', icon: <SiJquery aria-hidden="true" />, color: '#0769AD' },
    { name: 'React', icon: <FaReact aria-hidden="true" />, color: '#61DAFB' },
  ],
  'ব্যাকএন্ড': [
    { name: 'Node.js', icon: <FaNodeJs aria-hidden="true" />, color: '#339933' },
    { name: 'PHP', icon: <FaPhp aria-hidden="true" />, color: '#8892BF' },
  ],
  'ডেটাবেস': [
    { name: 'MySQL', icon: <SiMysql aria-hidden="true" />, color: '#00758F' },
    { name: 'MongoDB', icon: <SiMongodb aria-hidden="true" />, color: '#47A248' },
  ],
};

// একটি টিল্ট-সক্ষম কার্ড কম্পোনেন্ট (অপরিবর্তিত)
function TiltableSkillCard({ skill }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  return (
    <div ref={tiltRef} className="skill-card">
      <div className="skill-card-content">
        <div className="skill-icon" style={{ color: skill.color }}>
          {skill.icon}
        </div>
        <h5 className="skill-name">{skill.name}</h5>
      </div>
    </div>
  );
}

function Skills() {
  return (
    // পরিবর্তন ২: Accessibility-র জন্য aria-labelledby যোগ করা হলো
    <section id="skills" className="skills-section" aria-labelledby="skills-section-title">
      <Container>
        <Fade direction="up" triggerOnce>
          <h2 id="skills-section-title" className="section-title text-center mb-5">আমার প্রযুক্তিগত অস্ত্রাগার</h2>
        </Fade>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-5">
            <Fade direction="up" triggerOnce>
              <h3 className="skill-category-title">{category}</h3>
            </Fade>
            <Row>
              {skills.map((skill, index) => (
                <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-4">
                   <Fade direction="up" delay={index * 100} triggerOnce>
                     <TiltableSkillCard skill={skill} />
                   </Fade>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
}

export default Skills;