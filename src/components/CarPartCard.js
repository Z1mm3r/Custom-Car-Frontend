import React from 'react'
import {Button, Card, Image } from 'semantic-ui-react'

export default function CarPartCard(props){

  const handleClick = (e) => {
    props.handleClick(props.part.id);
  }

  const renderPrice = () =>{
    let priceChange = props.part.price - props.selectedValue
    return (
      <Card.Description className={ priceChange < 0 ? "price-text-higher" : "price-text-lower" }>
        {priceChange < 0 ? `-` : `+` }{`$${Math.abs(priceChange)}`}
      </Card.Description>
    )
  }

  console.log(props.part.price)

  return (
    <Card className={props.selected ? "selected-card" : ""}>
      <Card.Header>{props.part ? props.part.name : 'No Name Provided' }</Card.Header>
      {renderPrice()}
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
