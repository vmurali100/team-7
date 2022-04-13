import React, { Component } from 'react'

export default class Child1 extends Component {
  render() {
    return (
        <div>
             <h1> hello Welcome</h1>    
        </div>
      )     
  }
  componentWillUnmount(){
    console.log("componentwillunmount life cycle");
    return <i>MOST OF ComponentWillunmount</i>
}
}
