import React, { Component } from 'react'

 class VcR3 extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
           person : false
       }
     }
  render() {
      let message
      if(this.state.person){
        message = <div>He is a Good person</div>
      }else{
        message = <div>He is a Bad person</div>
      }
    return <div> {message}</div>
  }
}

export default VcR3