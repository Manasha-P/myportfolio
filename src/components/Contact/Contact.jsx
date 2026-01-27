import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolio';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="section-title" data-aos="fade-up">Let's Work Together</h2>
        <p className="text-center contact-subtitle mb-5" data-aos="fade-up">
          Have an exciting project or opportunity? I'd love to hear from you!
        </p>
        
        <Row className="g-4">
          <Col lg={4} data-aos="fade-right">
            <Card className="glass-card contact-info-card mb-3">
              <Card.Body className="text-center">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <h5 className="contact-info-title">Email</h5>
                <p className="contact-info-text">{personalInfo.email}</p>
              </Card.Body>
            </Card>

            <Card className="glass-card contact-info-card mb-3">
              <Card.Body className="text-center">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <h5 className="contact-info-title">Phone</h5>
                <p className="contact-info-text">{personalInfo.phone}</p>
              </Card.Body>
            </Card>

            <Card className="glass-card contact-info-card">
              <Card.Body className="text-center">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <h5 className="contact-info-title">Location</h5>
                <p className="contact-info-text">{personalInfo.location}</p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={8} data-aos="fade-left">
            <Card className="glass-card contact-form-card">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="contact-form-label">Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="contact-form-label">Your Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="contact-form-label">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="custom-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="contact-form-label">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      required
                      className="custom-input"
                    />
                  </Form.Group>

                  <Button type="submit" className="btn-gradient w-100">
                    <FaPaperPlane className="me-2" />
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;