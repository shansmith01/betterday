import React from 'react'
import { Container, Jumbotron, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import FeatureCard from '../components/FeatureCard'
import Img from "gatsby-image"

const AboutPage = ({data}) => {
  
  return (
    <div>
      <Container className="lightblue">
        <Row>
          <Col>
          <div className="mt-5 pt-5 darkblue">
          
            <h1 className="display-4">Once their heads are out of the sand your people can achieve amazing things</h1>
            <p className="lead">We help you build a reslient workforce so that your people can reach their potential at work and at home.</p>
            <Link to="/leaders/">
              <Button outline color="primary">Learn more</Button>
            </Link>
            
          </div>

            </Col>
          <Col>

          </Col>
        </Row>

      </Container>
      <Container>
        <Row>
          <Col >
            <h2>Conact Us</h2>
            <Form 
            name="Contact" 
            method="POST" 
            data-netlify="true"
            >
           <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
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

export default AboutPage

