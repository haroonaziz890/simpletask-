import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        position: "flexible",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#212529",
        color: "white",
        textAlign: "center",
        padding: "15px 0",
        zIndex: 1000,
      }}
    >
      <Container>
        <Row>
          {/* Left Side - About */}
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We provide the best WooCommerce services in Muzaffarabad. Connect with us to get started!
            </p>
          </Col>

          {/* Middle - Links */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Services</a></li>
              <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
            </ul>
          </Col>

          {/* Right Side - Social Media */}
          <Col md={4}>
            <h5>Follow Us</h5>
            <a href="#" style={{ color: "white", marginRight: "10px" }}>
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" style={{ color: "white", marginRight: "10px" }}>
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" style={{ color: "white" }}>
              <i className="fa-brands fa-instagram"></i>
            </a>
          </Col>
        </Row>
        <hr style={{ backgroundColor: "lightgray" }} />
        <Row>
          <Col>
            <p style={{ marginBottom: "0" }}>&copy; 2025 YourCompany. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
