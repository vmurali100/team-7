import React, { Component } from 'react'

export default class State3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Hello:'My Friend '
      }
    }
    ChangeBtn=()=>{
        this.setState({
            Hello:'ThalaDeena'
        })
    }
    
  render() {
    return (
      <div>
          <h1>{ this.state.Hello}</h1>
          <button onClick={this.ChangeBtn}>StateMeth</button>
      </div>
    )
  }
}
