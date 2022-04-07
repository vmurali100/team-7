import React, { Component } from 'react'

export default class Manga extends Component {
    constructor(){
        super()
        this.state={
            myarra:['annam','Sambar','Rasam','Vepudu']
        }
    }
  render() {
    return (
      <div>
           <b>{this.state.myarra}</b>
      </div>
    )
  }
}
