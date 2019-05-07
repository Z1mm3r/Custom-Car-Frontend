import React,{useState} from 'react'
import {Grid, Image,Card} from 'semantic-ui-react'

import Search from './Search.js'

import CarSelectionCard from './CarSelectionCard.js'
import { useStateValue } from '../State.js';
import API_URL from '../Constants/config.js'



export default function CarSelectionScreen(props){

  const [{availableCarModels}, dispatch] = useStateValue();
  const [{selectedPartIds}, setSelectedPart] = useStateValue();
  const [{possibleParts}, setPossibleParts] = useStateValue();
  const [currentSearchModels, setCurrentSearchModels] = useState([]);
  const [isSearching, setIsSearching] = useState(false);



  let renderCars = ()  => {


    if(isSearching){
      return currentSearchModels.map(element =>{
        if(element.id === selectedPartIds["model"]){
          return <CarSelectionCard selected={true} handleClick={getCarParts}  car={element} key={element.id}/>
        }
        else
          return <CarSelectionCard selected={false} handleClick={getCarParts} car={element}   key={element.id}/>
      })
    }


    return availableCarModels.map(element => {
      if(element.id === selectedPartIds["model"]){
        debugger
        return <CarSelectionCard selected={true} handleClick={getCarParts} car={element} key={element.id}/>
      }
      else
      return <CarSelectionCard selected={false} handleClick={getCarParts}  car={element} key={element.id}/>
    })
  }

  let handleSearchChange = (value) =>{
    debugger
    if(value == ""){
      setIsSearching(false)
      return
    }

    else {
      setIsSearching(true)
    }

    let output = []
    let regex = new RegExp(value,'i')
    if(availableCarModels != []){
      availableCarModels.forEach(element => {
        debugger
        if(regex.test(element.name))
        output.push(element)
      })
    }
    setCurrentSearchModels(output);

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
              wheels:info.wheels,
              colors:info.colors}
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
          <Search onChange = {handleSearchChange}></Search>
        </Grid.Row>
        <Grid.Row>
            <Card.Group centered>
                {renderCars()}
            </Card.Group>
        </Grid.Row>
      </Grid>
    </div>
  )
}
