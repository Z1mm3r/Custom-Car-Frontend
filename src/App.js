import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import {StateProvider} from './State.js'
import logo from './logo.svg';
import './App.css';

import SiteWrapper from './SiteWrapper.js'

const App = () => {

  const initialState = {
    selectedPaneIndex: 0,
    availableCarModels: [],
    possibleParts: {wheels:[],colors:[],},
    selectedPartIds: {model:null,colors:null,wheels:null,

    }
  };

  const reducer = (state,action) =>{
    switch (action.type){
      case 'ChangePaneIndex':
        return{
          ...state,
          selectedPaneIndex: action.newPaneIndex
        }
      case 'ChangeCarModels':
        return {
          ...state,
          availableCarModels: action.newCarModels
        };
      case 'ChangeSelectedParts':
        return {
          ...state,
          selectedPartIds: action.newSelectedParts
        };
      case 'ChangePossibleParts':
        return {
          ...state,
          possibleParts: action.newPossibleParts,
          selectedPartIds:{model: state.selectedPartIds.model,colors:null,wheels:null, }
        }
      default:
        return {...state}
    }
  }

  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
        <BrowserRouter>
          <SiteWrapper/>
        </BrowserRouter>
      </StateProvider>
    </div>
  );
}


export default App;
