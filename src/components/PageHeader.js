import React from 'react'
import {Card,Grid,Divider,Image} from 'semantic-ui-react'

import HorizNavBar from './HorizNavBar.js'
import logo from '../Media/Images/logo.png';


export default function PageHeader(){

  return(
    <>
      <Image  centered className="header-image" src={logo}></Image>
      <HorizNavBar/>
      <Divider/>
    </>
  )

}
