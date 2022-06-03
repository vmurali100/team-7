import React, { Component } from 'react'

export default class Parent extends Component {
  
  render() {
    return (
      <div>
          <h1>{this.props.UserDetails.Studentname}</h1>
          <h1>{this.props.UserDetails.Rollnumber}</h1>
          <h1>{this.props.UserDetails.EmailId}</h1>
          <h1>{this.props.UserDetails.Password}</h1>
      </div>
    )
  }
}
