import React, { Component } from 'react'

export default class Caps extends Component {
    handler(){
        console.log('Hello Rehaman')
    }
  render() {
    return (
      <div><button onClick={this.handler}>Click</button></div>
    )
  }
}
