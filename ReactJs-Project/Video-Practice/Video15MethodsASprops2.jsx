import React, { Component } from 'react'
import Video15MethodsASprops1 from './Video15MethodsASprops1'

export  class Video15MethodsASprops2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         UserName:""
      }
      this.changeHandler=this.changeHandler.bind(this)
    }
    changeHandler(){
        alert('hellp'+this.state.UserName)
    }
  render() {
    return (
      <div>
          <Video15MethodsASprops1 changeHandler={this.changeHandler}/>
      </div>
    )
  }
}
