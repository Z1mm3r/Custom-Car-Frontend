import React,{useState} from 'react'
import {Grid, Image,Card} from 'semantic-ui-react'

import CarPartCard from './CarPartCard.js'
import { useStateValue } from '../State.js';
import ErrorCard from './ErrorCard.js'
import API_URL from '../Constants/config.js'



export default function PartSelectionScreen(props){

  const [{selectedPartIds}, dispatch] = useStateValue();
  const [{possibleParts}, setPossibleParts] = useStateValue();

  let setCarParts = (id) =>{
    debugger
    dispatch({
      type: 'ChangeSelectedParts',
      newSelectedParts: {
        ...selectedPartIds,
        [props.part_type]: id}
    })
  }

  let renderParts = (partType)  => {

    if(possibleParts[partType] == null){
      return <ErrorCard></ErrorCard>
    }

    return possibleParts[partType].map(element => {
      if(element.id === selectedPartIds[partType]){
        debugger
        return <CarPartCard selected={true} handleClick={setCarParts} partType={partType}  part={element} key={element.id}/>
      }
      else
        return <CarPartCard selected={false} handleClick={setCarParts} partType={partType}  part={element} key={element.id}/>
    })
  }

  return(
    <div>
    <Grid columns={1} divided centered>
        <Grid.Row>
          <div> Select Part Model </div>
        </Grid.Row>
        <Grid.Row>
            <Card.Group>
                {renderParts(props.part_type)}
            </Card.Group>
        </Grid.Row>
      </Grid>
    </div>
  )
}
