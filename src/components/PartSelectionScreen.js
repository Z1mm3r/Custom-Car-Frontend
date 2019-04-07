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

  let handleErrors = (partType) => {
    if(selectedPartIds["model"] == null){
      return <ErrorCard errorType={"No Model Selected"} errorMessage={"Please Select A Car Model First."} />
    }
    if(possibleParts[partType] == null){
      return <ErrorCard errorType={"Error: Null Part List."} errorMessage={"Please Report This Error"}/>
    }

    if(possibleParts[partType] == []){
      return <ErrorCard errorType={"Error: Empty Part List."} errorMessage={"No parts of this type could be found for selected car model."}/>
    }

  }

  let renderParts = (partType)  => {

    let error = handleErrors(partType);

    if(error){
      return error
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
