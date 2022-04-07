import React, { Component } from 'react'

export default class Ramayya extends Component {
    constructor(){
        super()
        this.state={
            Cv:"Iam From Surya Component go throught by Raju"
        }
    }
    getchange=()=>{
        let newState={...this.state}
        newState.Cv="Hello Iam From Raju Component"
        this.setState(newState);
    }
    
  render() {
    return (
      <div>
          <button onClick={this.getchange}>getinfo</button>
      </div>
    )
  }
}
