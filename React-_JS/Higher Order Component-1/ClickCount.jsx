import React, { Component } from 'react'

export default class ClickCount extends Component {

    constructor(props){
        super(props)

        this.state={
           count:0
        }
    }
    handleMouseOver=()=>{
        this.setState({count:this.state.count+1})
    }
    handleMouseOut=()=>{
        this.setState({count:this.state.count-1})
    }

  render() {
    return (
      <div>
          <button onClick={this.handleMouseOver}>Increase</button>
          <button onClick={this.handleMouseOut}>Decress</button>

          <h2>Rating :{this.state.count}</h2>
      </div>
    )
  }
}
