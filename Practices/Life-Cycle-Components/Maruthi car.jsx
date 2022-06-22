import React, { Component } from 'react'
import Hello from './Hello'
import Audi from './Person'
export default class Car extends Component {
    constructor(props) {
        console.log("componet constructor cycle")
        super(props)
    }    
 /* 1.Mounting */
componentWillMount(){
    console.log("componentWillMount Cycle")
}
/* 2.Updating */ 
shouldComponentUpdate(){
    console.log("shouldComponentUpdate cycle")
    return true
}
componentDidCatch(){
    console.log("componentDidCatch Cycle")
}
componentDidUpdate(){
    console.log("componentDidUpdate Cycle")
}
componentDidMount(){
    console.log("componentDidMount Cycle")
}
// /* 3.UnMounting */ 
render(){
    console.log("Component Render Cycle")
    return <div>
        {this.props.carname== "" ? <Hello/>:<Audi carname={this.props.carname}/>}
    </div>
}
      
    
  }

