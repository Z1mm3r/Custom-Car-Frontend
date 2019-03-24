import React,{useState} from 'react'
import {Grid, Image,Card} from 'semantic-ui-react'

import CarSelectionCard from './CarSelectionCard.js'
import { useStateValue } from '../State.js';
import API_URL from '../Constants/config.js'



export default function CarSelectionScreen(props){

  const [{availableCarModels}, dispatch] = useStateValue();
  const [{selectedPartIds}, setSelectedPart] = useStateValue();
  const [{possibleParts}, setPossibleParts] = useStateValue();
  debugger


  let renderCars = ()  => {
    return availableCarModels.map(element => {
      return <CarSelectionCard handleClick={getCarParts}  car={element} key={element.id}/>
    })
  }

  let getCarParts = (id) => {


      fetch(`${API_URL.car_models}/${id}/parts`,
        {method: "GET",
        headers: {"Content-Type": "application/json"}})
        .then(response => response.json())
        .then(info =>{
          //TODO Figure out how to get this dispatch to work without needing to set model manually...
          //Because this component does not remount, selectedPartId's is not updated...
          // so we cant use {...selectedPartIds,etc_other_parts} because its still set to the initial state
          //
          setPossibleParts({
            type: 'ChangePossibleParts',
            newPossibleParts: {
              wheels:info.wheels}
          })
        })
    }


  return(
    <div>
    <Grid columns={1} divided centered>
        <Grid.Row>
          <div> Select Car Model </div>
        </Grid.Row>
        <Grid.Row>
            <Card.Group>
                {renderCars()}
            </Card.Group>
        </Grid.Row>
      </Grid>
    </div>
  )
}
