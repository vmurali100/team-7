import React, { Component } from 'react'

 class VcR1 extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          first: true
       }
     }
  render() {

    return this.state.first && <div>Welcome Sunline</div>

    // return this.state.first ?(
    //   <div>Welcome Sunline</div>
    // ) : (
    //   <div>Welcome Sir</div>
    // )

    // let message 
    // if (this.state.first){
    //   message = <div>Welcome Sunline</div>
    // } else{
    //   message = <div>Welcome Sir</div>
    // }
    // return <div>{message}</div>

      // if(this.state.first){
      //     return <div>Welcome Sunline</div>
      // }
      // else{
      //     return <div>Welcome Sir</div>
      // }
    // return (
    //   <div>
    //       <div>Welcome Sunline</div>
    //       <div>Welcome Sir</div>
    //   </div>
    // )
  }
}

export default VcR1