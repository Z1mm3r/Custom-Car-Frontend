import React from 'react'
import {Card,Grid,Divider,Image} from 'semantic-ui-react'

import { useStateValue } from '../State.js';


export default function CartCard (){

  const [{selectedPartIds}, setSelectedPartIds] = useStateValue();
  const [{possibleParts}, setPossibleParts] = useStateValue();
  const [{availableCarModels}, setAvailableCarModels] = useStateValue();

  //TODO move this to another HOC along with the duplicated code at SummaryCard.

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

  const renderCartSelection = (name,price,img_url) => {
    return(
      <>
        {name}
        <div/>
        {price}
        <div/>
        <Image className="mini-card-image" src={img_url}></Image>
        <Divider/>
      </>
    )
  }

  const renderCartCard = () => {

    let output = []

    if(selectedPartIds["model"] != null){
      let car  = findCarWithId(selectedPartIds["model"])
      output.push(renderCartSelection(car.name,car.base_price,car.img_url))
    }

    Object.keys(selectedPartIds).map((part) => {
      if(part != "model" && selectedPartIds[part] != null){
        let partObj = findPartWithId(part,selectedPartIds[part])
        debugger
        output.push(renderCartSelection(partObj.name,partObj.price,partObj.img_url))
      }
    })

    return output

  }

  return (
    <Card>
      <Card.Header> Cart </Card.Header>
      <Card.Content> {renderCartCard()}</Card.Content>
    </Card>
  )

}
