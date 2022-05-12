import React, { Component } from 'react'

export default class Video11SetState extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    Changemsg=()=>{
        this.setState({
            count:this.state.count + 1

        }, ()=>{
            console.log('calback code',this.state.count)
        })
        console.log(this.state.count)
   }
  render() {
    return (
      <div>
          <button onClick={this. Changemsg}> Submit</button>
          <h1>{ this.state.count}</h1>
      </div>
    )
  }
}