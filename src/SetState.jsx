import React, { Component } from 'react'

export default class SetState extends Component {
    constructor() {
      super()
    
      this.state = {
         Number : 1 
      }
    }
    increase(){
        this.setState({
            Number : this.state.Number+1 
        })
    }
    decrease(){
        this.setState({
            Number : this.state.Number-1 
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.Number}</h1>
          <button onClick={()=>this.increase()}>Increase</button>
          <button onClick={()=>this.decrease()}>Decrease</button>
      </div>
    )
  }
}
