import React from 'react'
import {Card,Grid,Divider} from 'semantic-ui-react'

import { useStateValue } from '../State.js';


export default function CartCard (){

  const [{selectedPartIds}, setSelectedPartIds] = useStateValue();
  const [{possibleParts}, setPossibleParts] = useStateValue();
  const [{availableCarModels}, setAvailableCarModels] = useStateValue();

  const findPartWithId = (type,id) =>{
    debugger
    return possibleParts[type].find((part) => {
      return part.id == id
    })
  }

  const findCarWithId = (id) =>{
    debugger
      return availableCarModels.find((car) =>{
        return car.id == id;
      })
  }

  const renderCartCard = () => {


    let output = []

    if(selectedPartIds["model"] != null){
      findCarWithId(selectedPartIds["model"])
    }


    Object.keys(selectedPartIds).map((part) => {
      if(part != "model"){
        findPartWithId(part,selectedPartIds[part])
      }
    })

  }

  return (
    <Card>
      <Card.Header> Cart </Card.Header>
      <Card.Content> {renderCartCard()}</Card.Content>
    </Card>
  )

}
