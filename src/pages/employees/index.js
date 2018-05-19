import React from 'react'
import { Container, Jumbotron, Col, Row, Button, Card, CardTitle, CardBody, CardText } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import Img from "gatsby-image"

const EmployeePage = ({data}) => {
  
  return (
    <div>
      <Container className="lightblue">
        <Row>
          <Col md={{ size: 5, offset: 1 }}>
          <div className="mt-5 pt-5 darkblue">
          
            <h1 className="display-4">Employees</h1>
            <p className="lead">We help you build a reslient workforce so that your people can reach their potential at work and at home.</p>
            <Button outline color="primary">Learn more</Button>
            
          </div>

            </Col>
          <Col md={{ size: 3, offset: 2 }}>
          <Col md="1"></Col>
          <Img
      title="Header image"
      alt="Greek food laid out on table"
      sizes={data.app1.sizes}
    
    />
          </Col>
        </Row>

      </Container>

      <Container fluid className="text-center py-5 darkbluebg">
       <Row>
        <Col>
          <h2 className="display-4">Let the science do the work</h2>
          <p className="lead">Better Day App focuses on the seven areas scientifically proven to help people be at their best.*</p>
          
          

        </Col>
       </Row>
      </Container>

      <Container className="text-center py-5 darkblue ">
       <Row>
        <Col>
          <h2 className="display-5">We help you better understand your people</h2>
          <p className="lead">If you are not measuring it you can't improve. We give you the tools so you can understand your teams successes and strugles and clearly report this back to you.</p>
     
        </Col>
       </Row>
      </Container>
    </div>
  )
}

export default EmployeePage

export const pageQuery = graphql`
  query EmployeeImageQuery {
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
