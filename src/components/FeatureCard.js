import React from "react";
import styled from "styled-components";
import { Button, Card, CardTitle, CardBody, CardText } from 'reactstrap'

const FeatureCard = props => (

  <Card>
  	<CardBody>
  		<CardTitle>{props.title}</CardTitle>
  		<CardText>{props.text}</CardText>
  		{/* <Button outline color="primary">Learn more</Button> */}
  	</CardBody>
  </Card>

);

export default FeatureCard;


