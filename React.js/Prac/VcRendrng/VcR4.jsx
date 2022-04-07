import React, { Component } from 'react'

 class VcR4 extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          percentage : false
       }
     }
  render() {

    return this.state.percentage?(
        <div>Your Marks is 100% Correct</div>
    ):(
        <div>Your Marks is 10% Wrong</div>
    )
  }
}

export default VcR4