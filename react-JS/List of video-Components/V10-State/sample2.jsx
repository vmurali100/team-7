import React, { Component } from 'react'

export default class ABhi extends Component {
  constructor() {
    super()
    this.state = { 
      Name: "Welcome" 
    }
  }
  changemassage() {
    this.setState({
      Name: "Thala Deena"
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.Name}</h1>
        <button onClick={() => this.changemassage()}>Submit</button>
      </div>
    )
  }
}
