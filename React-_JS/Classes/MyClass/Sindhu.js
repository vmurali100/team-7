import React, { Component } from 'react'
import Durga from './Durga'

export default class Sindhu extends Component {
    constructor() {
        super()
        this.state={
            fname:"surya"
        }
       
    }
  render() {
    return (
      <div>
          <h1>{this.state.fname}</h1>
          <Durga message={message} />
      </div>
    )
  }
}
