import React, { Component } from 'react'

export default class MethodsProps extends Component {
    constructor(){
        super()
        this.state = {
            ParentName : "Parent"
        }
    }

    greetParent(){
        alert("Hello"+ this.state.ParentName)
    }
  render() {
    return (
      <div></div>
    )
  }
}
