import React from 'react'
import { Container, Jumbotron, Col, Row, Button, Card, CardTitle, CardBody, CardText } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import FeatureCard from '../components/FeatureCard'

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
          
          <div className="mt-5 card-deck">
            <FeatureCard 
                  title="Relationships"
                  text="Build connected, supportive relationships at home and at work."
               />
            <FeatureCard 
                  title="Work Difficulties"
                  text="Get controll over day to day stressors at work."
               />
            <FeatureCard 
                  title="Life Chellenges"
                  text="Get balanace back into your home life."
               />
            <FeatureCard 
                  title="Purpose"
                  text="Make sure life matches wat you believe to be worthwhile."
               />
          </div>

          <div className="mt-5 card-deck">
            <FeatureCard 
                  title="Own Emotions"
                  text="Help manage the negative and positive emotions you face everyday."
               />
            <FeatureCard 
                  title="Positive Thinking"
                  text="Foster useful postive thinking to solve problems."
               />
            <FeatureCard 
                  title="Health"
                  text="Give them the mental strength needed to reach reach their physical goals."
               />
            <FeatureCard 
                  title="I need one more"
                  text="becuase it looks prettier on the website, but if not we can do without"
               />
          </div>

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

