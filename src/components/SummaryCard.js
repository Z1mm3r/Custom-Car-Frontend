import React from 'react'
import {Card,Divider,Button} from 'semantic-ui-react'
import {numberToDollars} from '../utility/utility.js'

import { useStateValue } from '../State.js';

export default function SummaryCard() {

  const [{selectedPartIds}, dispatch] = useStateValue();
  const [{possibleParts}, setPossibleParts] = useStateValue();
  const [{availableCarModels}, setAvailableCarModels] = useStateValue();


  //TODO move this to another HOC along with the duplicated code at Cart Card.


  let getTotalPrice = () => {

    let output = 0


    if(selectedPartIds["model"] != null){
      let car  = findCarWithId(selectedPartIds["model"])
      output += car.base_price
    }


    Object.keys(selectedPartIds).map((part) => {
      if(part != "model" && selectedPartIds[part] != null){
        let partObj = findPartWithId(part,selectedPartIds[part])
        if(partObj.price != null)
          output += partObj.price
      }
    })
    let stringOutput = numberToDollars(output)
    debugger
    return stringOutput

  }

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


  let renderSummaryCard = () => {
    return(
      <Card>
        <Card.Header> Summary </Card.Header>
        <Card.Content> Price <div/> {getTotalPrice()} </Card.Content>
        <Button color="green">Purchase</Button>
      </Card>
    )
  }

  return(
    <>
      {renderSummaryCard()}
    </>

  )

}
