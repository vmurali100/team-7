import React, { Component } from 'react'

export default class EventHandler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Color:''
      }
    }
    EventHandler=()=>{
        document.write('Button Working')
    }
  render() {
    return (
      <div>
          <h1>{this.state.Color}</h1>
          <button onClick={this.EventHandler}> Button</button>
      </div>
    )
  }
}
