import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { personalInfo } from '../../data/portfolio';
import './Navbar.css';

function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'testimonials', 'contact'];

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      expanded={expanded}
      className={scrolled ? 'navbar-scrolled' : 'navbar-transparent'}
    >
      <Container>
        <Navbar.Brand>
          <Link to="home" smooth duration={500} className="logo">
            <span className="logo-bracket">{'<'}</span>
            {personalInfo.name.split(' ')[0]}
            <span className="logo-bracket">{'/>'}</span>
          </Link>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="nav-link"
                activeClass="active"
                onClick={() => setExpanded(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <Button 
              variant="outline-light" 
              className="ms-lg-3 resume-btn"
              href={personalInfo.resume}
            >
              Resume
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;