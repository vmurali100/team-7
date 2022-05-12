import React, { Component } from 'react'

export default class SetState1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
           Increment:100
      }
    }
    Decrement=()=>{
        this.setState({
         Increment:this.state.Increment-1
        },()=>{ console.log(this.state.Increment)}
        )
    }
  render() {
    return (
      <div>
          <h1>{this.state.Increment}</h1>
          <button onClick={this.Decrement}>Click</button>
      </div>
    )
  }
}
