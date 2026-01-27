import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { skills } from '../../data/portfolio';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="section-title" data-aos="fade-up">Skills & Technologies</h2>
        
        <Row className="g-4">
          <Col lg={4} data-aos="fade-up" data-aos-delay="100">
            <div className="glass-card skill-category">
              <h3 className="skill-category-title">Frontend</h3>
              <div className="skills-list">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={4} data-aos="fade-up" data-aos-delay="200">
            <div className="glass-card skill-category">
              <h3 className="skill-category-title">Backend</h3>
              <div className="skills-list">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={4} data-aos="fade-up" data-aos-delay="300">
            <div className="glass-card skill-category">
              <h3 className="skill-category-title">Tools & Others</h3>
              <div className="skills-list">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;