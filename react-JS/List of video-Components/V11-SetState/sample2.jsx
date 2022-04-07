import React, { Component } from 'react'

export default class Moon extends Component {
  constructor(){
      super()
      this.state = {
          number:1
      }
  }
  Yes(){
      this.setState({
        number:this.state.number+1
      })
       console.log(this.state.number)
  }
  No(){
      this.setState({
        number:this.state.number -1
      })
  }
    render() {
    return (
      <div>
          <h3>number:{this.state.number}</h3>
          <button onClick={()=>this.Yes()}>Yes</button>
          <button onClick={()=>this.No()}>No</button>
      </div>
    )
  }
}
