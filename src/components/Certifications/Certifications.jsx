import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCertificate } from 'react-icons/fa';
import { certifications, achievements } from '../../data/portfolio';
import './Certifications.css';

function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <Container>
        <h2 className="section-title" data-aos="fade-up">Certifications & Achievements</h2>
        
        <h3 className="subsection-title" data-aos="fade-up">Certifications</h3>
        <Row className="g-4 mb-5">
          {certifications.map((cert, index) => (
            <Col md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="glass-card certification-card h-100">
                <Card.Body>
                  <div className="cert-icon">
                    <FaCertificate />
                  </div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer} - {cert.year}</p>
                  <p className="cert-description">{cert.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h3 className="subsection-title" data-aos="fade-up">Achievements</h3>
        <Row className="g-4">
          {achievements.map((achievement, index) => (
            <Col md={12} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="glass-card achievement-card">
                <Card.Body>
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-year">{achievement.year}</p>
                  <p className="achievement-description">{achievement.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Certifications;