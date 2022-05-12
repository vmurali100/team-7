import React, { Component } from 'react'

export default class A9BindingEvent2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         song:'Vathi coming-mp3 song'
      }
    }
    eventhndlr=()=>{
        this.setState({
            song:'now trending is Arabic kuthu-mp3 song'
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.song}</h1>
          <button onClick={this.eventhndlr.bind(this)}>Press</button>
      </div>
    )
  }
}
