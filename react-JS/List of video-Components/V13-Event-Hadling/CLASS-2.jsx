import React, { Component } from 'react'

export default class Eook extends Component {
    clickHandler(){
        console.log('clicked the button')
    }
    render() {
    return (
      <div>
          <button onclick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}
