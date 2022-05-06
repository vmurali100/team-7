import React, { Component } from 'react'

export default class MethodasProp3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:''
      }
    }
    Methodprops=()=>{
        alert('You have Used 50% of Data in Your Jio Number'+this.state.message)
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick={this.Methodprops.bind(this)}>Click</button>
      </div>
    )
  }
}
