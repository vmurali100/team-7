import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Condition: true
      }
    }
  render() {
    // return (
    //   <div></div>
    // )
    // if( this.state.Condition){
    //    return <div>User Data  available</div>
    // }else{
    //    return <div>Data is not available</div>
    // }
    // let Virat
    // if (this.state.Condition) {
    //   return  Virat=<div>Iam Ok</div>
    // }else{
    //   return  Virat= <div>Iam not Ok</div>
    // }
    // return this.state.Condition ?(
    //     <div>Transaction succesfully  completed</div>
    // ):(
    //     <div>Somthig runing in your device</div>
    // )
  }
}
