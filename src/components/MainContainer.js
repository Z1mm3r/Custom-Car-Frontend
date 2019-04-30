import React,{useState} from 'react'
import WelcomeScreen from './Welcome.js'
import CarSelectionScreen from './CarSelectionScreen.js'
import PageTabs from './PageTabs'
import PageLayout from './PageLayout'
import PageHeader from './PageHeader'
import API_URL from '../Constants/config.js'

import {TABS}  from '../Constants/config.js'
import { useStateValue } from '../State.js';


export default function MainContainer() {

  const [{availableCarModels}, dispatch] = useStateValue()
  const [isRetrievingModels, setIsRetrievingModels] = useState(false)
  //const [currentTabs]



  let getCarModels = () =>{
      fetch(`${API_URL.car_models}`,
        {method: "GET",
        headers: {"Content-Type": "application/json"}})
        .then(response => response.json())
        .then(info =>{
          dispatch({
            type: 'ChangeCarModels',
            newCarModels: info
          })
          setIsRetrievingModels(false)
        })
    }

  if(availableCarModels.length == 0 && !isRetrievingModels){
    setIsRetrievingModels(true)
    getCarModels()
  }

  return(
    <div>
      <PageLayout/>
    </div>
  )

}
// <div>
//  {this.state.SelectedCarModel ? <PageTabs></PageTabs> : <WelcomeScreen cars={this.state.AvailableCarModels} /> }
// </div>
