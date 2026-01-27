import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../../data/portfolio';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <Container className="hero-content">
        <Row className="align-items-center min-vh-100">
          <Col lg={7} className="order-2 order-lg-1" data-aos="fade-right">
            <div className="hero-text">
              <div className="hero-greeting">Hi, I'm</div>
              <h1 className="hero-name">{personalInfo.name}</h1>
              
              <div className="hero-title">
                <TypeAnimation
                  sequence={[
                    'CSE Student',
                    2000,
                    'Frontend Developer',
                    2000,
                    'UI/UX Designer',
                    2000,
                    'Creative Coder',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="typing-text"
                />
              </div>

              <p className="hero-description">
                {personalInfo.subtitle}
              </p>

              <div className="hero-buttons">
                <Button className="btn-gradient me-3" href="#contact">
                  Let's Connect
                </Button>
                <Button 
                  variant="outline-light" 
                  className="btn-outline-custom"
                  href={personalInfo.resume}
                >
                  <HiDownload className="me-2" />
                  View Resume
                </Button>
              </div>

              <div className="hero-socials">
                <a href={personalInfo.github} className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href={personalInfo.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href={personalInfo.twitter} className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="social-link">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </Col>

          <Col lg={5} className="order-1 order-lg-2" data-aos="fade-left">
            <div className="hero-image-wrapper">
              <div className="hero-image-container">
                <div className="image-backdrop"></div>
                <img 
                  src="/assets/images/projects/Profile.jpeg"
                  alt="Manasha P" 
                  className="hero-image"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces';
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;