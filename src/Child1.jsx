import React, { Component } from 'react'

export default class Child1 extends Component {
    constructor(props) {
      super(props)
    
     
      
    }
  render() {
    return 
      <div>
            <h1>StudentName: {this.props.details.name}</h1>
            <h2>Number: {this.props.details.number}</h2>
            <h3>Email: {this.props.details.email}</h3>
      </div>
    
  }
}
