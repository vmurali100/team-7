import React, { Component } from 'react'

export default class MouseonclickSam2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            Count : 0
        }
    }
    countchange=()=>{
        this.setState({
            Count : this.state.Count+5
        })
    }
    changecountss=()=>{
        this.setState({
            Count : this.state.Count-5
        })
    }
  render() {
    return (
      <div>
          <h2>Count : {this.state.Count}</h2>
          <button onClick={this.countchange}>Increase</button>
          <button onClick={this.changecountss}>Decrease</button>
      </div>
    )
  }
}
