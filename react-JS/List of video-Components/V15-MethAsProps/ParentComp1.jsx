import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponets extends Component {
 constructor(props){
     super(props)
     this.state={
         Name:'Deena'
     }
     this.Book=this.Book.bind(this)
 }
 Book(){
     alert('Hello'+ this.state.Name )
 }
    render() {
    return( 
        <div>
            <ChildComponent Zoom={this.Book}/>
      </div>
    )
  }
}
