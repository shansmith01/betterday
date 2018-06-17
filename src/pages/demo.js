import React from 'react'
import { Container, Jumbotron, Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import Link from 'gatsby-link'
import Img from "gatsby-image"

const DemoPage = ({data}) => {
  
  return (
    <div className="mt-5 pt-5 darkblue">
      <Container className="lightblue">
        <Row>
        <Col md="6" >
           
            <h1>Get a demo</h1>
              <p>Find out how we can help you build a reslient workforce so that your people can reach their potential at work and at home.</p>
              <p>Fill out the form and we will be in touch within 24 hours</p> 
              <Img
              title="Resiliance App"
              alt="Screen shot of how are you feeling today screen"
              sizes={data.app1.sizes}
            />                  
            
          </Col>
          <Col md={{ size: 5, offset: 1 }} >
            <Form 
            name="demo" 
            method="POST" 
            data-netlify="true"
            >

          <FormGroup>
            <Label for="name">Your name</Label>
            <Input type="text" name="name" id="name" placeholder="Bill Smith"/>
          </FormGroup>

           <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="bill@bill.com"/>
          </FormGroup>

          <FormGroup>
            <Label for="company">Company</Label>
            <Input type="text" name="company" id="company" placeholder="Bill's Company"/>
          </FormGroup>
            


            <FormGroup>
              <Button>Let's book this demo</Button>
              </FormGroup>
          </Form>

          </Col>
        </Row>

</Container>

      
    </div>
  )
}

export default DemoPage

export const pageQuery = graphql`
  query DemoImageQuery {
    app1: imageSharp(id: { regex: "/dashboard.png/" }) {
      sizes(maxWidth: 470 ) {
        ...GatsbyImageSharpSizes
      }
    }
  
  }
`