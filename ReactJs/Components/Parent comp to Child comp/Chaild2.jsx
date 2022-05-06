import React, { Component } from 'react'
import { Cars } from './Parent2'

export default class Chaild2 extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return <div>
    <h1> Car Name:{this.props.Details.Name}</h1>
    <h1>Brand:{this.props.Details.Brand}</h1>
    <h1>Model:{this.props.Details.Model}</h1>
    <h1>Price:{this.props.Details.Price}</h1>

</div> 
    
  }
}
