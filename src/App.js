import React, { Component } from 'react';

import {StateProvider} from './State.js'
import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer.js'

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
          possibleParts: action.newPossibleParts
        }
      default:
        return {...state}
    }
  }

  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
        <MainContainer/>
      </StateProvider>
    </div>
  );
}


export default App;
