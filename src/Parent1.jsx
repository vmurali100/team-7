import React, { Component } from 'react'
import Child1 from './Child1'

export default class Parent1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first :{
             name:"sadik",
             number:"09090909",
             email:"sadik@gmail.com"
         }
      }
    }
  render() {
    return (
      <div>
          <Child1 details={this.state}/>
      </div>
    )
  }
}
