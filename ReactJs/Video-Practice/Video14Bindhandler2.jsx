import React, { Component } from 'react'

export default class Video14Bindhandler1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Content:"Hello Ria"
      }
      this.ChengeHandler=this.ChengeHandler.bind(this)
    }
    ChengeHandler=()=>{
        this.setState({
            Content:"Do you Love me"
        })
    }
  render() {
    return (
      <div>
          <button onClick={this.ChengeHandler}> Press</button>
          <h1>{this.state.Content}</h1>
      </div>
    )
  }
}
