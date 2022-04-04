import React, { Component } from 'react'
import Parent from './Parent'

export default class Parentes extends Component {
  render() {
    return (
      <div>
           <h2>{this.state.fname}</h2>
          <h2>{this.state.lname}</h2>
          <h2>{this.state.age}</h2>
          <h2>{this.state.email}</h2>
          <h2>{this.state.password}</h2>
          <Parent/>
      </div>
    )
  }
}
