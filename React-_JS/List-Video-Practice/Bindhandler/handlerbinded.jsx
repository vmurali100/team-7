import React, { Component } from 'react'

export default class Sindhu extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:"Hii Sindhu Are you finished your work"
      }
      this.ChengeHandler=this.changeHandler.bind(this)
    }
    changeHandler=()=>{
        this.setState({
            data:"thank You for reply"
        })
    }
  render() {
    return (
      <div>
          <button onClick={this.changeHandler}> Press</button>
          <h1>{this.state.data}</h1>
      </div>
    )
  }
}