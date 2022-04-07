import React, { Component } from 'react'

export default class Ganga extends Component {
    constructor(){
        super()
        this.super={
            mydata:"Hellow Wolrd Welcome to Indian Scitific Lab"
        }
    }
  render() {
    return (
      <div>
             <h1>{this.state.mydata}</h1>
      </div>
    )
  }
}
