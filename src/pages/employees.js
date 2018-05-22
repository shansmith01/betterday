import React from 'react'
import { Container, Jumbotron, Col, Row, Button, Card, CardTitle, CardBody, CardText } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import Img from "gatsby-image"

const EmployeePage = ({data}) => {
  
  return (
    <div>

      <Container fluid className="text-center darkbluebg p-5">
        <Container>
          <Row>
            <Col>
              <h1>We help you get the most out of your work and personal life</h1>    
              <p className="lead">Better Day is like your personal mental health coach. It uses the best available science to help you reach your potential</p>
            </Col>
          </Row>
        </Container>
      </Container>
      
      <Container className="lightblue py-4">
        <Row>
          <Col md={{ size: 5, offset: 1 }}>
            <div className="mt-5 pt-5 darkblue">
              <h2 className="display-5">Become aware of and track how you are feeling over time</h2>
              <p className="lead">Log your feelings often to get a better sense of the ups and downs, and what helps to get more of the ups</p>
            </div>
          </Col>
          <Col md={{ size: 3, offset: 2 }}>
            <Img
              title="Resiliance App"
              alt="Screen shot of how are you feeling today screen"
              sizes={data.app1.sizes}
            />
          </Col>
          <Col md="1"></Col>
        </Row>
      </Container>


      <Container fluid className="darkbluebg py-4">
      <Container>
        <Row className="my-5">
        <Col md="1"></Col>
        <Col md={{ size: 3}}>
            <Img
              title="Metal Health"
              alt="Screen shot of screen about what they can do to improve their mental health"
              sizes={data.app2.sizes}
            />
          </Col>
          
          <Col md={{ size: 5, offset: 2 }}>
            <div className="mt-5 pt-5">
              <h2 className="display-5">Delve further into what is driving your mood</h2>
              <p className="lead">Simply taking one minute to acknowledge how you are feeling and what has contributed to these feelings, can help you cope with day to day stresses.</p>
            </div>
          </Col>
          
          
        </Row>
        </Container>
      </Container>


      <Container className="lightblue py-4">
        <Row>
          <Col md={{ size: 5, offset: 1 }}>
            <div className="mt-5 pt-5 darkblue">
              <h2 className="display-5">Spend a few minutes improving your day using activities backed by science.</h2>
              <p className="lead">Personalised for how you are feeling on any given day, Better Day will make suggestions of short activities to improve your wellbeing.</p>
            </div>
          </Col>
          <Col md={{ size: 3, offset: 2 }}>
            <Img
              title="Workplace resiliance app"
              alt="Screen shot of surevey about employee emotions and feelings"
              sizes={data.app3.sizes}
            />
          </Col>
          <Col md="1"></Col>
        </Row>
      </Container>
    </div>
  )
}

export default EmployeePage

export const pageQuery = graphql`
  query EmployeeImageQuery {
    app1: imageSharp(id: { regex: "/resiliance-app-1.png/" }) {
      sizes(maxWidth: 470 ) {
        ...GatsbyImageSharpSizes
      }
    }
    app2: imageSharp(id: { regex: "/workplace-resiliance-app-2.png/" }) {
      sizes(maxWidth: 500 ) {
        ...GatsbyImageSharpSizes
      }
    }
    app3: imageSharp(id: { regex: "/wental-health-awareness-app-3/" }) {
      sizes(maxWidth: 500 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
