import React, { Component } from 'react'

export  class Practice3 extends Component {
    constructor(){
      super()
      this.state={
          fname:"Surya",
          lname:"Prakash",
          age:"23",
          email:"suryasplucky",
          password:"2007@ss"
      }
    }
  render() {
    return (
      <div>
          <h2>{this.state.fname}</h2>
          <h2>{this.state.lname}</h2>
          <h2>{this.state.age}</h2>
          <h2>{this.state.email}</h2>
          <h2>{this.state.password}</h2>
      </div>
    )
  }
}
