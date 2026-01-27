import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap, FaLaptopCode, FaTrophy, FaCertificate } from 'react-icons/fa';
import { aboutData, education } from '../../data/portfolio';
import './About.css';

function About() {
  // Map icon names to icon components
  const iconMap = {
    graduation: <FaGraduationCap />,
    laptop: <FaLaptopCode />,
    trophy: <FaTrophy />,
    book: <FaCertificate />
  };

  return (
    <section id="about" className="about-section">
      <Container>
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        
        <Row className="mb-5">
          <Col lg={8} className="mx-auto" data-aos="fade-up" data-aos-delay="100">
            <p className="about-description">{aboutData.description}</p>
          </Col>
        </Row>

        <Row className="g-4 mb-5">
          {aboutData.highlights.map((highlight, index) => (
            <Col md={6} lg={3} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="glass-card text-center h-100 highlight-card">
                <Card.Body>
                  <div className="highlight-icon-svg">
                    {iconMap[highlight.icon]}
                  </div>
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-subtitle">{highlight.subtitle}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h3 className="text-center mb-4" data-aos="fade-up">Education Background</h3>
        <Row className="g-4">
          {education.map((edu, index) => (
            <Col md={12} lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="glass-card h-100 education-card">
                <Card.Body>
                  <h4 className="education-degree">{edu.degree}</h4>
                  <h5 className="education-institution">{edu.institution}</h5>
                  <p className="education-year">{edu.year}</p>
                  {edu.cgpa && <p className="education-grade">CGPA: {edu.cgpa}</p>}
                  {edu.percentage && <p className="education-grade">Percentage: {edu.percentage}</p>}
                  <p className="education-description">{edu.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default About;