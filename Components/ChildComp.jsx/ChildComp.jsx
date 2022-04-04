import React, { Component } from 'react'

export default class ChildComp extends Component {
 constructor(props){
     super()
 }
    render() {
    return <div>
        <button onClick={this.props.open}>open</button>
        <h2 style={{color:"red"}}>{this.props.msg}</h2>
    </div>
      
    
  }
}
