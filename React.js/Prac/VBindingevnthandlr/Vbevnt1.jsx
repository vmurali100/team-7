import React, { Component } from 'react'

export default class Vbevnt1 extends Component {
    constructor(props){
        super(props)
        this.state={
            message : 'This is a Binding Event Handler'
        }
    }
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          <button>Click</button>
      </div>
    )
  }
}
