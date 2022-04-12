import React, { Component } from 'react'
import ChildComp from './ChildComp2'


export default class ParentComp extends Component {
  constructor(props){
      super(props)
      this.state={
          Name:'Surya'
      }
      this.Person=this.Person.bind(this)
  }
  Person(){
      alert('Hello'+this.state.Name)
  }
    render() {
    return(
      <div>
          <ChildComp One={this.Person}/>
      </div>
    )
  }
}
