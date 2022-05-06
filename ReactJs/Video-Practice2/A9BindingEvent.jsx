import React, { Component } from 'react'

export default class A9BindingEvent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message:'Hello '
      }
    }
    EventHandler(){
        this.setState({
            message:'Excuseme if you dont mind ,iam loving you'
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
         <button onClick={this.EventHandler.bind(this)}> Touch me</button>
      </div>
    )
  }
}
