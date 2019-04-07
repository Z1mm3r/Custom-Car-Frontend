import React from 'react'
import {Button, Card, Image } from 'semantic-ui-react'


export default function CarSelectionCard(props){

  const handleClick = (e) => {
    props.handleClick(props.part.id);
  }

  return (
    <Card className={"error"}>
      <Card.Header>Error</Card.Header>
      <Card.Description className="error-text">
        {props.errorMessage}
      </Card.Description>
    </Card>
  )
}
