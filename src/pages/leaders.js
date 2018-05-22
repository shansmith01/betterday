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
          <h1 className="display-4">Truley know how your team feels and understand what drives them</h1>
          <p className="lead mb-4">Our personal and profesional lives are intertwined. To get the most out of your people, they need to have balance. We give you the tools to measure how your people feel and the tools to help them perfom at their best at work and at home.</p>
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
          <ul>
            <li>Get a snap shot of how your team is coping with life</li>
            <li>Drill down into teams and roles to get a deeper understanding of how they are performing</li>
            <li>Leadership tools to help you coach people through tough times</li>
            <li>Personalised tools for your staff to help them selfmanage and thrive</li>
            <li>Backed by science. This stuff is proven to work</li>
            <li>Benchmark you performance against other businesses in your sector</li>
            <li>All employee data is anonomised unless they choose to share it with you</li>
            <li>Backed by robust 100% PCI compliant security</li>
          </ul>

          <h2 className="display-5">Problems - Solutions</h2>
          <p>I don't know how my team is performing - We give you clear performance metrics across are range of measures </p>
          <p>I don't know how to deal with peoples personal issues - We provide tools to help you deal</p>
          <p>I don't know how we can compare to other businesses - We provide benchmarking</p>
            

          
          

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
