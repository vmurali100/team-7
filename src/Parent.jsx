import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first : 'parent'
      }
     this. greetparent = this. greetparent.bind(this)
    }
    greetparent(){
        alert("hello"+ this.state.first)
    }
  render() {
    return (
      <div>
          <Child />
      </div>
    )
  }
}
