import React from 'react'
import { Container, Jumbotron, Col, Row, Button, Card, CardTitle, CardBody, CardText } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import FeatureCard from '../components/FeatureCard'
import Img from "gatsby-image"

const IndexPage = () => {
  
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <Jumbotron className="mt-5">
            <h1 className="display-4">A better way to build strong people</h1>
            <p className="lead">We help you build a reslient workforce so that your people can reach their potential at work and at home.</p>
          </Jumbotron>
            </Col>
          <Col></Col>
        </Row>

      </Container>

      <Container fluid="fluid" className="text-center bg-secondary py-5">
       <Row>
        <Col>
          <h2 className="display-4">Let the science do the work</h2>
          <p className="lead">Better Day focuses on the seven areas scientifically proven to help people be at their best.*</p>
          
          <div className="mt-5 card-deck">
            <FeatureCard 
                  title="Relationships"
                  text="Build connected, supportive relationships at home and at work."
               />
            <FeatureCard 
                  title="Work Difficulties"
                  text="Get control over day to day stressors at work."
               />
            <FeatureCard 
                  title="Life Chellenges"
                  text="Get balanace back into your home life."
               />
          </div>

          <div className="mt-5 card-deck">
            <FeatureCard 
                  title="Emotions"
                  text="Help manage the negative and boost the positive emotions you face everyday."
               />
            <FeatureCard 
                  title="Helpful Thinking"
                  text="Foster useful thinking to solve problems."
               />
            <FeatureCard 
                  title="Health"
                  text="Get the mental strength needed to reach physical goals."
               />
             <FeatureCard 
                  title="Purpose"
                  text="Make sure life matches what you believe to be worthwhile."
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

