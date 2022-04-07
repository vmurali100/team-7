import React, { Component } from 'react'
import Vc4 from './Vc4'

 class Vpnc4 extends Component {
     constructor(props){
         super(props)
         this.state = {
             Lokesh : 'How r u ...!!'
         }
         this.displayLokesh = this.displayLokesh.bind(this)
     }
     displayLokesh(){
         alert("Hai Harish " + this.state.Lokesh)
     }
  render() {
    return (
      <div>
          <Vc4 LokeshHandler = {this.displayLokesh}/>
      </div>
    )
  }
}

export default Vpnc4