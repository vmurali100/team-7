import React, { Component } from 'react'

export class Vsetstate3 extends Component {
    constructor(){
        super()
        this.state={
            Number : 5
        }
    }
    increase(){
        this.setState({
            Number : this.state.Number +1
        })
    }
    decrease(){
        this.setState({
            Number : this.state.Number -1
        })
    }
  render() {
    return (
      <div>
          <h2>Number : {this.state.Number}</h2>
          <button onClick={()=>this.increase()}>Increase</button>
          <button onClick={()=>this.decrease()}>Decrease</button>
      </div>
    )
  }
}

export default Vsetstate3