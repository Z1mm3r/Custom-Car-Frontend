import React, {useState,useEffect} from 'react'
import {Menu,Tab,Input,Label} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import {useStateValue} from '../State.js'

export default function HorizNavBar()
{

  return(
      <Menu inverted widths={4}>
        <Menu.Item as={Link} to="/home" name='Home'>
            Home
        </Menu.Item>
        <Menu.Item name='CarCreator' as={Link} to ="/customize">
          Create A Car
        </Menu.Item>
        <Menu.Item as={Link} to="/about" name='AboutUs'>
          About Us
        </Menu.Item>
      </Menu>
  )

}
