import React from 'react'
import { Container, Jumbotron, Col, Row } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import AboutCard from '../components/AboutCard';

const AboutPage = ({data}) => {
  
  return (
    <div>
      <Container className="lightblue">
        <Row>
          <Col>
          <div className="mt-5 pt-5 darkblue">
          
            <h1 className="display-4">Business meets science to help people reach their potential</h1>
            <p className="lead">The team at Better day are a mix of clinical phsycologists and business people who were frustrated by traditional methods of people management. We are passionate about making sure people reach their potential and have a more fulfilling life. To do this we use the very best evidece.</p> 
          </div>

          </Col>
        </Row>

      </Container>


      
    </div>
  )
}

export default AboutPage

