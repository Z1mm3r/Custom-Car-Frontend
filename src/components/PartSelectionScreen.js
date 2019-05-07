import React,{useState} from 'react'
import {Grid, Image,Card,Input} from 'semantic-ui-react'

import CarPartCard from './CarPartCard.js'
import { useStateValue } from '../State.js';
import ErrorCard from './ErrorCard.js'
import API_URL from '../Constants/config.js'
import StandardSearch from './StandardSearch.js'
import Search from './Search.js'


export default function PartSelectionScreen(props){

  const [{selectedPartIds}, dispatch] = useStateValue();
  const [{possibleParts}, setPossibleParts] = useStateValue();
  const [currentSearchParts, setCurrentSearchParts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedPart, setSelectedPart] = useState({price : 0});

  let setCarParts = (id) =>{
    dispatch({
      type: 'ChangeSelectedParts',
      newSelectedParts: {
        ...selectedPartIds,
        [props.part_type]: id}
    })

    setSelectedPart(searchPartById(props.part_type,id))

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

    if(isSearching && currentSearchParts == []){
      return <ErrorCard errorType={"No Results Found"} errorMessage={"No parts match this search"}/>
    }

  }

  let renderParts = (partType)  => {

    let error = handleErrors(partType);

    if(error){
      return error
    }

    if(isSearching)
      return renderPart(currentSearchParts)

    else
      return renderPart(possibleParts[partType])
  }

  let renderPart = (partList) => {
    return partList.map(element =>{
      if(element.id === selectedPartIds[props.part_type]){
        return <CarPartCard selected={true} handleClick={setCarParts} partType={props.part_type}  part={element} key={element.id}/>
      }
      else
        return <CarPartCard selected={false} handleClick={setCarParts} partType={props.part_type}  part={element} key={element.id}/>
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
    if(possibleParts[props.part_type] != []){
      possibleParts[props.part_type].forEach(element => {
        debugger
        if(regex.test(element.name))
        output.push(element)
      })
    }
    setCurrentSearchParts(output);

  }

  let searchPartById = (partType, id) => {
    return possibleParts[partType].find(element => {
      if(element.id === id){
        return true
      }
      return false
    })
  }

  return(
    <div>
    <Grid columns={1} divided centered>
        <Grid.Row>
          <div> Select Part Model </div>
        </Grid.Row>
        <Grid.Row>
          {/* <StandardSearch type = {props.part_type}></StandardSearch> */}
          <Search onChange={handleSearchChange}/>
        </Grid.Row>
        <Grid.Row>
            <Card.Group centered >
                {renderParts(props.part_type)}
            </Card.Group>
        </Grid.Row>
      </Grid>
    </div>
  )
}
