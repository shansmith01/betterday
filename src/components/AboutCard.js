import React from "react";
import styled from "styled-components";
import { Button, Card, CardTitle, CardBody, CardText } from 'reactstrap'
import Img from "gatsby-image"

// Need to figure out how to include {{data}} and props in a component

const AboutCard = props => (

  <Card>
  	<CardBody>
		<Img
      title={props.personName}
      alt={props.personName}
      sizes={data.personImage.sizes}
    />
  		<CardTitle>{props.personName}</CardTitle>
  		<CardText>{props.text}</CardText>
  	</CardBody>
  </Card>

);

export default AboutCard;


export const pageQuery = graphql`
  query PersonImageQuery {
    personImage: imageSharp(id: { regex: "allanah.jpg" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
