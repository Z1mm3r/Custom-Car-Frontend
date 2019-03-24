import React,{Component} from 'react'
import {Button, Card, Image } from 'semantic-ui-react'

export default class CarPartCard extends Component{



  render(){
    
    return (
      <Card>
        <Card.Header>{this.props.part ? this.props.part.name : 'No Name Provided' }</Card.Header>
        <Card.Description className="price-text">
          {this.props.part.price ?  `Starting at $${this.props.part.price}` : 'No Price Provided' }
        </Card.Description>
        <Card.Content>
          <Image  className="small-card-image" src={this.props.part.img_url}/>
        </Card.Content>
        <Card.Content extra>
          <Button basic color='green'>
            Select Part
          </Button>
        </Card.Content>
      </Card>
    )
  }
}
