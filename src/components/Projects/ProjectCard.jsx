import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <Card className="glass-card project-card h-100">
      <div className="project-image-wrapper">
        <Card.Img 
          variant="top" 
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        {project.featured && <Badge className="featured-badge">Featured</Badge>}
      </div>
      
      <Card.Body className="d-flex flex-column">
        <Badge bg="primary" className="category-badge mb-2 align-self-start">
          {project.category}
        </Badge>
        
        <Card.Title className="project-title">{project.title}</Card.Title>
        <Card.Text className="project-description flex-grow-1">
          {project.description}
        </Card.Text>
        
        <div className="project-tech mb-3">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-links d-flex gap-2">
          <Button 
            variant="outline-light" 
            size="sm" 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow-1"
          >
            <FaGithub className="me-1" /> Code
          </Button>
          <Button 
            className="btn-gradient" 
            size="sm" 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <FaExternalLinkAlt className="me-1" /> Live
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;