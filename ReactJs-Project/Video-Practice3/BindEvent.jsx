import React, { Component } from 'react'

export default class BindEvent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Message:'Hello Rohini'
      }
    }
    BindEvnt=()=>{
        this.setState({
            Message:'Iam Loving you'
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.Message}</h1>
          <button onClick={this.BindEvnt.bind(this)}>Onclick</button>
      </div>
    )
  }
}
