import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from 'reactstrap'
import FeatureCard from '../components/AboutCard'
import Link from 'gatsby-link'
const Footer = props => (

    <Container fluid className="darkbluebg py-5">
    <Container>
      <Row>
        <Col md="4" className="mb-3">
          <h2>Product</h2>
          <div><Link to='/leaders'>For Leaders</Link></div>
          <div><Link to='/employees'>For Employees</Link></div>
          <div><Link to='/demo'>Request A Demo</Link></div>
        </Col>
        <Col md="4" className="mb-3">
        <h2>Other Goodness</h2>
        <div><Link to='/about-us'>About us</Link></div>
        <div><Link to='/privacy'>Privacy Policy</Link></div>
        </Col>
        <Col md="4" className="mb-3">
          <h2>Keep in Touch</h2>
          <div><Link to='contact'>Contact us</Link></div>
        </Col>
      </Row>
      </Container>
    </Container>

);

export default Footer;



