import React, { Component } from 'react'

export default class Ajay extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Memo:"Hii Surya Prakash "
      }
      this.setState=this.state.bind(this)
    }
    hangeHandler=()=>{
        this.setState({
            Memo:"Call me cherry...!"
        })
    }
    hangeHandler(){
        this.setState({
            Memo:"Call me cherry...!"
        })
    }
  render() {
    return (
      <div>
          <button onClick={this.hangeHandler.bind(this)}>Click</button>
          <button onClick={this.hangeHandler}>Click</button>
          <h1>{this.state.Memo}</h1>
      </div>
    )
  }
}
