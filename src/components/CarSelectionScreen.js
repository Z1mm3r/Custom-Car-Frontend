import React,{useState} from 'react'
import {Grid, Image,Card} from 'semantic-ui-react'

import CarSelectionCard from './CarSelectionCard.js'
import { useStateValue } from '../State.js';
import API_URL from '../Constants/config.js'



export default function CarSelectionScreen(props){

  const [{availableCarModels}, dispatch] = useStateValue();

  let renderCars = ()  => {
    return availableCarModels.map(element => {
      return <CarSelectionCard handleClick={getCarParts}  car={element} key={element.id}/>
    })
  }

  let getCarParts = (id) =>{
      fetch(`${API_URL.car_models}/${id}/parts`,
        {method: "GET",
        headers: {"Content-Type": "application/json"}})
        .then(response => response.json())
        .then(info =>{
          debugger

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
