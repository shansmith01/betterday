import React from 'react'
import { Container, Jumbotron, Col, Row, Button, Card, CardTitle, CardBody, CardText } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import Img from "gatsby-image"

const LeadersPage = ({data}) => {
  
  return (
    <div>
      <Container fluid className="text-center py-5 darkbluebg">
      <Container>
       <Row>
        <Col>
          <h1 className="display-4">Get a true sense of your teams wellbeing</h1>
          <p className="lead mb-4">Our personal and professional lives are intertwined. To get the most out of your people, they need to have balance. We give you the tools to measure how your teams wellbeing and to help them perform at their best at work and at home.</p>
          <Img
      title="Header image"
      alt="Greek food laid out on table"
      sizes={data.dashboard.sizes}
    />
        </Col>
       </Row>
       </Container>
      </Container>

      <Container fluid className="text-center py-5 darkbluebg">
       <Row>
        <Col>
          <h2>Features</h2>
          
            <div>Get a snap shot of how your team is coping with life</div>
            <div>Drill down into teams and roles to get a deeper understanding of how they are performing</div>
            <div>Leadership tools to help you coach people through tough times</div>
            <div>Personalised tools for your staff to help them selfmanage and thrive</div>
            <div>Backed by science. This stuff is proven to work</div>
            <div>Benchmark you performance against other businesses in your sector</div>
            <div>All employee data is anonomised unless they choose to share it with you</div>
            <div>Backed by robust 100% PCI compliant security</div>

        </Col>
       </Row>
      </Container>

    </div>
  )
}

export default LeadersPage

export const pageQuery = graphql`
  query LeadersImageQuery {
    dashboard: imageSharp(id: { regex: "/dashboard.png/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
