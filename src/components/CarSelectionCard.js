import React,{Component} from 'react'
import {Button, Card, Image } from 'semantic-ui-react'

import { useStateValue } from '../State.js';
import {numberToDollars} from '../utility/utility.js'

export default function CarSelectionCard(props){


  const [{selectedPaneIndex}, setSelectedPane] = useStateValue();
  const [{selectedPartIds}, setSelectedPart] = useStateValue();

  const handleClick = (e) => {
    setSelectedPane({
      type: 'ChangePaneIndex',
      newPaneIndex: 2
    })

    setSelectedPart({
      type: 'ChangeSelectedParts',
      newSelectedParts: {...selectedPartIds,model:props.car.id}
    })

    props.handleClick(props.car.id);

  }


  return (
    <Card className={props.selected ? "selected-card" : ""}>
      <Card.Header>{props.car ? props.car.name : 'No Name Provided' }</Card.Header>
      <Card.Description className="price-text">
        {props.car.base_price ?  `Starting at ${numberToDollars(props.car.base_price,0)}` : 'No Price Provided' }
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
