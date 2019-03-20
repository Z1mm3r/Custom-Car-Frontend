import React,{Component} from 'react'
import {Button, Card, Image } from 'semantic-ui-react'

export default class CarPartCard extends Component{



  render(){
    debugger
    return (
      <Card>
        <Card.Header>{this.props.car ? this.props.car.name : 'No Name Provided' }</Card.Header>
        <Card.Description className="price-text">
          {this.props.car.base_price ?  `Starting at $${this.props.car.base_price}` : 'No Price Provided' }
        </Card.Description>
        <Card.Content>
          <Image  className="small-card-image" src={this.props.car.img_url}/>
        </Card.Content>
        <Card.Content extra>
          <Button basic color='green'>
            Select Model
          </Button>
        </Card.Content>
      </Card>
    )
  }
}
