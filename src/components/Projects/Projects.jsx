import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/portfolio';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
        
        <div className="filter-buttons" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="outline-light"
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <Row className="g-4 mt-4">
          {filteredProjects.map((project, index) => (
            <Col md={6} lg={4} key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
