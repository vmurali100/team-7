import React, { Component } from 'react'
import Vc1 from './Vc1'

export class Vpnc1 extends Component {
    constructor(props){
        super(props)
         this.state = {
         StudentName :' Sadik'
            
        }
        this.greetStudent = this.greetStudent.bind(this)
    }
    greetStudent(){
        alert("Hello" +this.state.StudentName)
    }
  render() {
    return (
      <div>
          <Vc1 studentHandler = {this.greetStudent}/>
      </div>
    )
  }
}

export default Vpnc1