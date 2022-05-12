import React, { Component } from 'react'

export default class Video10State extends Component {
    constructor(){
        super()
        this.state={
            Message:"hello Friends"
        }
    }
    Changemsg=()=>{
        this.setState ({Message:"Good Evening"})
   }
  render() {
    return (
      <div>
          <button onClick={this. Changemsg}> Submit</button>
          <h1>{ this.state.Message}</h1>
      </div>
    )
  }
}
