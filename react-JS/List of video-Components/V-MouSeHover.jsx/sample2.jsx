import React, { Component } from 'react'

export default class Food extends Component {
  constructor() {
    super()
  
    this.state = {
       count:0
    }
  }
  MouseOver=()=>{
      this.setState({count:this.state.count+1})
  }
  MouseOut=()=>{
    this.setState({count:this.state.count-1})

  }
    render() {
    return (
      <div>
          <button onMouseOver={this.MouseOver}>increment</button>
        ``<button onMouseOut={this.MouseOut}>Decrement</button>

        <h1>the count is:{this.state.count}</h1>
      </div>
    )
  }
}
