import React, { Component } from 'react'
import A10MethodASprop2 from './A10MethodASprop2'

export default class A10MethodASprop1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message:''
      }
      this.EventHandler=this.EventHandler.bind(this)
    }
    EventHandler=()=>{
      alert('hello'+this.state.message)
    }
  render() {
    return (
      <div><A10MethodASprop2 EventHandler={this.EventHandler}/></div>
    )
  }
}
