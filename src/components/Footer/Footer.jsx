import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolio';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <div className="footer-logo">
              <span className="logo-bracket">{'<'}</span>
              {personalInfo.name.split(' ')[0]}
              <span className="logo-bracket">{'/>'}</span>
            </div>
          </Col>

          <Col md={4} className="text-center mb-3 mb-md-0">
            <div className="social-links">
              <a href={personalInfo.github} className="social-link" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={personalInfo.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={personalInfo.twitter} className="social-link" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <p className="copyright mb-0">
              Made with  by {personalInfo.name.split(' ')[0]}
            </p>
            <p className="copyright-year mb-0">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;