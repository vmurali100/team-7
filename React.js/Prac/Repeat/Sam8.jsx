import React, { Component } from 'react'

export default class Sam8 extends Component {
    constructor() {
      super()
    
      this.state = {
         Number : 0
      }
    }
    increase(){
        this.setState({
            Number : this.state.Number +5
        })
        console.log(this.state.Number)
    }
    decrease(){
        this.setState({
            Number : this.state.Number-10
        })
    }
  render() {
    return (
      <div>
          <h2>Number :{this.state.Number}</h2>
          <button onClick={()=>this.increase()}>Increase</button>
        <button onClick={()=>this.decrease()}>Decrease</button>
      </div>
    )
  }
}
