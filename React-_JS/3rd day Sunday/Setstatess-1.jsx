import React, { Component } from 'react'

export default class Blocked extends Component {
    constructor(){
        super()
        this.state={
            Sunline:{
                sub1:"HTML",
                sub2:"CSS",
                sub3:"Javscript",
                sub4:"React Js"
            }
        }
    }
    changedss(){
        this.setState({
            Sunline:{
                sub1:"Boostrap",
                sub2:"Stackbliz",
                sub3:"Sass",
                sub4:"React Js"
            }
        })
    }
  render() {
      let{sub1,sub2,sub3,sub4}=this.state.Sunline
    return (
      <div>
          <h1>{sub1}</h1>
          <h1>{sub2}</h1>
          <h1>{sub3}</h1>
          <h1>{sub4}</h1>
          <button onClick={this.changedss}>Sucess</button>
      </div>
    )
  }
}
