// src/components/Skills.js

import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import VanillaTilt from 'vanilla-tilt';

// আইকনগুলো ইম্পোর্ট করুন
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaPhp, FaNodeJs } from 'react-icons/fa';
import { SiJquery, SiMysql, SiMongodb } from 'react-icons/si';



// স্কিলগুলোকে শ্রেণীবদ্ধ করা হলো
const skillCategories = {
  'ফ্রন্টএন্ড': [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
    { name: 'jQuery', icon: <SiJquery />, color: '#0769AD' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  ],
  'ব্যাকএন্ড': [
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'PHP', icon: <FaPhp />, color: '#8892BF' },
  ],
  'ডেটাবেস': [
    { name: 'MySQL', icon: <SiMysql />, color: '#00758F' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  ],
};

// একটি টিল্ট-সক্ষম কার্ড কম্পোনেন্ট
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
    <section id="skills" className="skills-section">
      <Container>
        <Fade direction="up" triggerOnce>
          <h2 className="section-title text-center mb-5">আমার প্রযুক্তিগত অস্ত্রাগার</h2>
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