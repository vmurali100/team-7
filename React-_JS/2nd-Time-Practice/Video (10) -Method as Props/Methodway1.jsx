import React, { Component } from 'react'
import Sanjay from './Methodway'


export  class Badhri extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         brue:""
      }
      this.overwite=this.overwite.bind(this)
    }
    overwite(){

        alert('Virous Accurus...!'+this.state.brue)
    }

  render() {
    return (
      <div>
        <Sanjay  overwite="Sunline IT solutions..!"/>
      </div>
    )
  }
}
