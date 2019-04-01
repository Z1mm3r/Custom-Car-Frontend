import React from 'react'
import {Card,Grid,Divider,Image} from 'semantic-ui-react'

import { useStateValue } from '../State.js';

export default function OrderCard (){
//will be used to confirm cart parts, and send order to Database.

  const sendOrder = () => {
    fetch(`${API_URL.orders}`,
      {method: "Post",
      headers: {"Content-Type": "application/json"}})
      .then(response => response.json())
      .then(info =>{
        //handle order...thank you screen

      })
  }

  return(

  )

}
