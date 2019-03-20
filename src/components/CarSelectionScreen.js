import React,{useState} from 'react'
import {Grid, Image,Card} from 'semantic-ui-react'

import CarSelectionCard from './CarSelectionCard.js'
import { useStateValue } from '../State.js';



export default function CarSelectionScreen(props){

  const [{availableCarModels}, dispatch] = useStateValue();

  let renderCars = ()  => {
    return availableCarModels.map(element => {
      return <CarSelectionCard car={element} key={element.id}/>
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
