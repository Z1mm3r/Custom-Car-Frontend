import React,{useState, Component} from 'react'
import {Grid, Image,Card,Input} from 'semantic-ui-react'


export default class Search extends Component{

  constructor(props){
    super(props)
    this.state = { inputValue:""}
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.inputValue != this.state.inputValue)
      this.props.onChange(this.state.inputValue)
  }

  handleInputChange = (event) => {
    debugger
    this.setState({inputValue: event.target.value})
  }

  handleClear = (event) => {
    this.setState({inputValue:""})
  }


  render(){
    return(
      <Input  action={{ color: 'teal', labelPosition: 'left', icon: 'eraser', content: 'Clear', onClick: this.handleClear }}
    actionPosition='left' onChange={this.handleInputChange} icon='search' value={this.state.inputValue} placeholder='Search...'/>
    )
  }

}
