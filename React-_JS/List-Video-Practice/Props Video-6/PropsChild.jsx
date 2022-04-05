import React from "react";

import React, { Component } from 'react'

export  class PropsChild extends Component {
  render() {
    return (
      <div>
          <h1>{this.state.person.fname}</h1>
          <h1>{this.state.person.lname}</h1>
          <h1>{this.state.person.age}</h1>
          <h1>{this.state.person.email}</h1>
          <h1>{this.state.person.EMPId}</h1>          
      </div>
    )
  }
}
