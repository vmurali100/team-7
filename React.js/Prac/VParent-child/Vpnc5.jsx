import React, { Component } from 'react'
import Vc5 from './Vc5'

 class Vpnc5 extends Component {
     constructor(props){
         super(props)
         this.state = {
             Lokesh : ' fname: hari, lname: km'
                 
             
         }
         this.displayLokesh = this.displayLokesh.bind(this)
     }
     displayLokesh(){
         alert("Hai Harish  "  + this.state.Lokesh)
     }
  render() {
    return (
      <div>
        <Vc5 LokeshHandler = {this.displayLokesh}/>
      </div>
    )
  }
}

export default Vpnc5