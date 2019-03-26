import React,{Component} from 'react'
import {Button, Card, Image } from 'semantic-ui-react'

export default function CarSelectionCard(props){

  const handleClick = (e) => {
    props.handleClick(props.part.id);
  }

  return (
    <Card className={props.selected ? "selected-card" : ""}>
      <Card.Header>{props.part ? props.part.name : 'No Name Provided' }</Card.Header>
      <Card.Description className="price-text">
        {props.part.price ?  `Starting at $${props.part.price}` : 'No Price Provided' }
      </Card.Description>
      <Card.Content>
        <Image  className="small-card-image" src={props.part.img_url}/>
      </Card.Content>
      <Card.Content extra>
        <Button basic color='green' onClick={handleClick}>
          Select Part
        </Button>
      </Card.Content>
    </Card>
  )
}
