import React, { Component } from 'react'

export  class Video13EventHandler2 extends Component {
    click(){
        console.log('Button')
    }
  render() {
    return (
      <div><button onClick={this.click}>Click</button></div>
    )
  }
}
