import React,{useState} from 'react'
import WelcomeScreen from './Welcome.js'
import CarSelectionScreen from './CarSelectionScreen.js'
import PageTabs from './PageTabs'
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
          debugger
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

   /* let displayCurrentTab = () =>{
    switch(currentTab){
      case TABS.WELCOME:
        return (<WelcomeScreen> </WelcomeScreen>)

      case TABS.CAR_SELECTION:
        return(<CarSelectionScreen> </CarSelectionScreen>)

      default:
        return (<div>ERROR NO TAB FOUND</div>)

    }
  }
  */

  return(
    <div>
      <PageTabs/>
    </div>
  )

}
// <div>
//  {this.state.SelectedCarModel ? <PageTabs></PageTabs> : <WelcomeScreen cars={this.state.AvailableCarModels} /> }
// </div>
