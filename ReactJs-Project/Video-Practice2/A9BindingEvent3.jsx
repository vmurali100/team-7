import React, { Component } from 'react'

export default class A9BindingEvent3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Papulation:'210255402'
      }
      this.handler=this.handler.bind(this)
    }
    handler(){
        this.setState({
            Papulation:'now -24588247785547'
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.Papulation}</h1>
          <button onClick={this.handler}> press</button>
      </div>
    )
  }
}
