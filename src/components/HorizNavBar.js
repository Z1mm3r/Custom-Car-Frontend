import React, {useState,useEffect} from 'react'
import {Menu,Tab,Input,Label} from 'semantic-ui-react'

import {useStateValue} from '../State.js'

export default function HorizNavBar()
{

  return(
      <Menu inverted widths={4}>
        <Menu.Item name='Home'>
            Home
        </Menu.Item>
        <Menu.Item name='CarCreator'>
          Create My Car
        </Menu.Item>
        <Menu.Item name='AboutUs'>
          About Us
        </Menu.Item>
      </Menu>
  )

}
