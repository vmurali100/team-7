import React, { Component } from 'react'

export default class EX1 extends Component {
  render() {
    return (
      <div>Actual color </div>
    )
  }
  componentWillUnmount(){
      console.log('component WillUnmount Actual color is Removed')
  }
}
