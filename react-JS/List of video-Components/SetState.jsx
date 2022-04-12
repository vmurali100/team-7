import React, { Component } from 'react'

export default class Sun extends Component {
  constructor(){
      super()
      this.state = {
          number:1
      }
  }
  Yes(){
      this.setState({
        Room:this.state.Room+1
      })
       console.log(this.state.Room)
  }
  No(){
      this.setState({
        Room:this.state.Room -1
      })
  }
    render() {
    return (
      <div>
          <h3>Room:{this.state.Room}</h3>
          <button onClick={()=>this.Yes()}>Yes</button>
          <button onClick={()=>this.No()}>No</button>
      </div>
    )
  }
}
