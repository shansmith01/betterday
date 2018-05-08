import React from 'react'
import { Container, Jumbotron, Col, Row } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'

const IndexPage = () => {
  
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <Jumbotron className="mt-5">
            <h1 className="display-4">A better way to build strong people</h1>
            <p className="lead">We help you build a resliant workforce so your people can reach their potential at work and at home.</p>
          </Jumbotron>
            </Col>
          <Col></Col>
        </Row>

      </Container>

      <Container fluid="fluid" className="text-center bg-secondary py-5">
       <Row>
        <Col>
          <h2 className="display-5">Let the science do the work</h2>
          <p className="lead">Better Day focuses on the seven areas scientifically proven to people be at their best.*</p>
        </Col>
       </Row>
      </Container>


      <Container className="text-center py-5">
       <Row>
        <Col>
          <h2 className="display-5">We help you understand where your team's heads are at</h2>
          <p className="lead">If you are not measuring it you can't improve. We give you the tools so you can understand your teams successes and strugles and clearly report this back to you.</p>
        </Col>
       </Row>
      </Container>
    </div>
  )
}

export default IndexPage

