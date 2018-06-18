
import React from 'react'
import { Container, Jumbotron, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import Link from 'gatsby-link'

const ContactPage = ({data}) => {
  
  return (
    <div>
      <Container className="lightblue">
        <Row>
          <Col>
            <div className="mt-5 pt-5 darkblue">
              <h1 className="display-4">Thanks for Getting in touch</h1>
              <p>We will be in touch within 24 hours</p>            
            </div>
          </Col>
        </Row>

      </Container>


      
    </div>
  )
}

export default ContactPage



