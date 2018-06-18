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
              <h1 className="display-4">Get in touch</h1>
              <p>Fill out the form below and we will be in touch within 24 hours</p>            
            </div>
          </Col>
        </Row>

      </Container>
      <Container>
        <Row>
          <Col >
            <Form 
            name="Contact" 
            method="POST" 
            data-netlify="true"
            action="/thanks"
            >
           <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="email@email.com" />
          </FormGroup>
            
            <FormGroup>
              <Label>Message: </Label>
              <Input type="textarea" name="message"/>
            </FormGroup>

            <FormGroup>
              <Button>Send</Button>
              </FormGroup>
          </Form>

          </Col>
        </Row>
      </Container>

      
    </div>
  )
}

export default ContactPage



