import React, { Component } from 'react'

export default class Sam7 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first : "Hai How r u..???"
      }
    }
    changeobj(){
        this.setState({
            first : "yeah i'm good....!!"
        })
    }
  render() {
    return (
      <div>
          <h5>{this.state.first}</h5>
          <button onClick={()=>this.changeobj()}>Click here</button>
      </div>
    )
  }
}
