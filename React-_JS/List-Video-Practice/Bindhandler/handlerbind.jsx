import React, { Component } from 'react'

export default class Bindhu extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Welocme to Sunline It Instuistions "
      }
    }
    Handler=()=>{
        this.setState({
            message:"Thank You for Consulting"
        })
    }
  render() {
    return (
      <div>
          <button onClick={this.Handler.bind(this)}>Click</button>
          <h1>{this.state.message}</h1>
      </div>
    )
  }
}