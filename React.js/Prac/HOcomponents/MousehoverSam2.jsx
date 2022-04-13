import React, { Component } from 'react'

export default class MousehoverSam2 extends Component {
    constructor(props){
        super(props)

        this.state= {
            Count : 0
        }
    }

    changecount=()=>{
        this.setState({
            Count: this.state.Count+1
        })
    }
    changecountsss=()=>{
        this.setState({
            Count: this.state.Count-1
        })
    }

  render() {
    return (
      <div>
           <h2>Count  : {this.state.Count}</h2>
          <button onMouseOver={this.changecount}>Increase</button>
          <button onMouseOver={this.changecountsss}>Decrease</button>
      </div>
    )
  }
}
