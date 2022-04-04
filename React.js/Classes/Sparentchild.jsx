import React, { Component } from 'react'

export class Sparentchild extends Component {
    constructor(props){
        super()
        console.log(props)
    }
  render() {
    return (
      <div>
          <h1>First Name: {this.props.personobj.fname}</h1> 
           <h1>Last Name:{this.props.personobj.lname}</h1>     
      </div>
    )
  }
}
