import React, { Component } from 'react'

export class Vsetstate4 extends Component {
    constructor(){
        super()
        this.state={
            Number : 10
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
          <h3>{this.state.Number}</h3>
          <button onClick={()=> this.increase()}>Increase</button>
          <button onClick={()=> this.decrease()}>Decrease</button>
      </div>
    )
  }
}

export default Vsetstate4