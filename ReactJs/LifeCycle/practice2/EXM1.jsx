import React, { Component } from 'react'

export default class EXM1 extends Component {
  render() {
    return (
      <div>Fruits- And its Scientific Names </div>
    )
  }
  componentWillUnmount(){
      console.log('component WillUnmount Cycle is Removed')
  }
}
