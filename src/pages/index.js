import React from 'react'
import { Container, Jumbotron, Col, Row, Button, Card, CardTitle, CardBody, CardText } from 'reactstrap'
import Link from 'gatsby-link'
import graphql from 'graphql'
import FeatureCard from '../components/FeatureCard'
import Img from "gatsby-image"

const IndexPage = ({data}) => {
  
  return (
    <div>
      <Container className="lightblue">
        <Row>
          <Col md="6">
          <div className="mt-5 pt-5 darkblue">
          
            <h1 className="display-4">Once their heads are out of the sand your people can achieve amazing things</h1>
            <p className="lead">We help you build a resilient workforce so that your people can reach their potential at work and at home.</p>
            <Link to="/leaders/">
              <Button outline color="primary">Learn more</Button>
            </Link>
            
          </div>

            </Col>
          <Col md="6">
          <Img
      title="Header image"
      alt="Greek food laid out on table"
      sizes={data.headerImage.sizes}
    />
          </Col>
        </Row>

      </Container>

      <Container fluid className="text-center py-5 darkbluebg">
       <Row>
        <Col>
          <h2 className="display-4">Let the science do the work</h2>
          <p className="lead">Better Day App focuses on the seven areas scientifically proven to help inprove your team's wellbeing.*</p>
          
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

      <Container className="text-center py-5 darkblue ">
       <Row>
        <Col>
          <h2 className="display-5">We help you better understand your people</h2>
          <p className="lead">If you are not measuring it you can't improve. We give you the tools so you can understand your teams successes and strugles and clearly report this back to you.</p>
          <Img
      title="Header image"
      alt="Greek food laid out on table"
      sizes={data.dashboardImage.sizes}
    />
        </Col>
       </Row>
      </Container>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HeaderImageQuery {
    dashboardImage: imageSharp(id: { regex: "/dashboard.png/" }) {
      sizes(maxWidth: 1240 ) {
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
