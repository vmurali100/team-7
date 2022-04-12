import React, { Component } from 'react'

export default class Rock extends Component {
 constructor(props){
     super(props)
    this.state={
        message:'Deena'
    }
    // this.ClickHandler=this.ClickHandler.bind(this)

 }
//  ClickHandler(){
//      this.setState({
//          message:'Rehaman'
//      })
//      console.log(this)
//  }
 ClickHandler=()=>{
     this.setState({
         message:'Rehaman'
     })
 }

    render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.ClickHandler.bind(this)}>Click</button> */}
          {/* <button onClick={()=>this.ClickHandler(this)}>Click</button> */}

          <button onClick={this.ClickHandler}>Click</button>
      </div>
    )
  }
}
