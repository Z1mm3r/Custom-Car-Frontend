import React,{Component} from 'react'
import {Button, Card, Image } from 'semantic-ui-react'

import { useStateValue } from '../State.js';


export default function CarSelectionCard(props){


  const [{selectedPaneIndex}, setSelectedPane] = useStateValue();
  const [{selectedPartIds}, setSelectedPart] = useStateValue();

  const handleClick = (e) => {
    setSelectedPane({
      type: 'ChangePaneIndex',
      newPaneIndex: 2
    })

    debugger

    setSelectedPart({
      type: 'ChangeSelectedParts',
      newSelectedParts: {...selectedPartIds,model:props.car.id}
    })

  }


  return (
    <Card>
      <Card.Header>{props.car ? props.car.name : 'No Name Provided' }</Card.Header>
      <Card.Description className="price-text">
        {props.car.base_price ?  `Starting at $${props.car.base_price}` : 'No Price Provided' }
      </Card.Description>
      <Card.Content>
        <Image  className="small-card-image" src={props.car.img_url}/>
      </Card.Content>
      <Card.Content extra>
        <Button basic color='green' onClick={handleClick}>
          Select Model
        </Button>
      </Card.Content>
    </Card>
  )
}
