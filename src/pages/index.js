import React from 'react'
import { Container, Jumbotron, Col, Row, Button } from 'reactstrap'
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
          <h2 className="display-4">Let the science do the work</h2>
          <p className="lead">Better Day focuses on the seven areas scientifically proven to people be at their best.*</p>
          
          <Row className="mt-5">
            <Col>
              <h3>Relationships</h3>
              <p>Build connected, supportive relationships at home and at work.</p>
              <Button outline color="primary">Learn more</Button>
            </Col>
            <Col>
              <h3>Work Difficulties</h3>
              <p>Get controll over day to day stressors at work</p>
              <Button outline color="primary">Learn more</Button>
            </Col>
            <Col>
              <h3>Life Chellenges</h3>
              <p>Get balanace back into your home life</p>
              <Button outline color="primary">Learn more</Button>
            </Col>
            <Col>
              <h3>Purpose</h3>
              <p>Make sure life matches wat you believe to be worthwhile</p>
              <Button outline color="primary">Learn more</Button>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              <h3>Own Emotions</h3>
              <p>Help manage the negative and positive emotions you face everyday</p>
              <Button outline color="primary">Learn more</Button>
            </Col>
            <Col>
              <h3>Positive Thinking</h3>
              <p>Foster useful postive thinking to solve problems</p>
              <Button outline color="primary">Learn more</Button>
            </Col>
            <Col>
              <h3>Health</h3>
              <p>Give them the mental strength needed to reach reach their physical goals</p>
              <Button outline color="primary">Learn more</Button>
            </Col>
            <Col>
              <h3>I need one more</h3>
              <p>becuase it looks prettier on the website, but if not we can do without</p>
              <Button outline color="primary">Learn more</Button>
            </Col>
          </Row>



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

