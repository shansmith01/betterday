import React from 'react'
import { Container, Jumbotron, Col, Row, Button, Card, CardTitle, CardBody, CardText } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import Img from "gatsby-image"

const LeadersPage = ({data}) => {
  
  return (
    <div>


      <Container fluid className="text-center py-5 darkbluebg">
       <Row>
        <Col>
          <h2 className="display-4">Problems - Solutions</h2>
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
    app1: imageSharp(id: { regex: "/yourday1.png/" }) {
      sizes(maxWidth: 470 ) {
        ...GatsbyImageSharpSizes
      }
    }
    headerImage: imageSharp(id: { regex: "/ost.jpg/" }) {
      sizes(maxWidth: 500 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
