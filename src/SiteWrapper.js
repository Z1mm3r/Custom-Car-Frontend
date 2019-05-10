import React, { Component } from 'react';
import AboutUs from "./PageComponents/About.js"
import Home from "./PageComponents/Home.js"
import MainContainer from "./PageComponents/MainContainer.js"


import { Switch, Route, Redirect, withRouter } from 'react-router-dom'


export default function SiteWrapper (){


  return(
    <div>
        <Switch>
          <Route exact path="/home" render={props => (<Home/>)}/>
          <Route exact path="/about" render={props =>(<AboutUs/>)}/>
          <Route exact path="/customize" render={props =>(<MainContainer/>)}/>
          <Route exact path="/" render={props => (<Redirect to="/home"/>)}/>
          <Route exact path="" render={props =>(<Redirect to="/home"/>)}/>
        </Switch>
      </div>
  )

}
