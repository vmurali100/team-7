import React, { Component } from 'react'

export default class Video14Bindhandler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Messege:"Hii Rohini "
      }
    }
    hangeHandler=()=>{
        this.setState({
            Messege:"Iam Your Woodbe"
        })
    }
  render() {
    return (
      <div>
          <button onClick={this.hangeHandler.bind(this)}>Click</button>
          <h1>{this.state.Messege}</h1>
      </div>
    )
  }
}
