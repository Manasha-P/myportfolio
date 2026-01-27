import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { experiences } from '../../data/portfolio';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2 className="section-title" data-aos="fade-up">Internships & Experience</h2>
        
        <Row>
          <Col lg={10} className="mx-auto">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="timeline-item"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content glass-card">
                    <div className="experience-year">{exp.year}</div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                    <p className="experience-description">{exp.description}</p>
                    <div className="experience-tech">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;