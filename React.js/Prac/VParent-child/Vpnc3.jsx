import React, { Component } from 'react'
import Vc3 from './Vc3'

 class Vpnc3 extends Component {
     constructor(props){
         super(props)
         this.state = {
             Harish : 'what r u doing...!!'
         }
         this.displayHarish = this.displayHarish.bind(this)
     }
     displayHarish(){
         alert("Hello Lokesh " +this.state.Harish)
     }
  render() {
    return (
      <div>
          <Vc3 HarishHandler = {this.displayHarish}/>
      </div>
    )
  }
}

export default Vpnc3