import React from "react";
import styled from "styled-components";
import { Button, Card, CardTitle, CardBody, CardText } from 'reactstrap'
import Img from "gatsby-image"

// Need to figure out how to include {{data}} and props in a component

const AboutCard = props => (

  <Card>
  	<CardBody>

  		<CardTitle>{props.personName}</CardTitle>
  		<CardText>{props.text}</CardText>
  	</CardBody>
  </Card>

);

export default AboutCard;


