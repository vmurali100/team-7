import React, { Component } from 'react'

export default class Statemethod extends Component {
    constructor() {
      super()
    
      this.state = {
         ss:" Hai React-Js....@@@" 
         
      }
    }
    changedata(){
        this.setState({
            ss:"Hai JavaScript....!!!!"
            
        })
    }
  render() {
    return (
      <div>
          <h3>{this.state.ss}</h3>
          <button onClick={()=>this.changedata()}>Click to Change</button>
      </div>
    )
  }
}
