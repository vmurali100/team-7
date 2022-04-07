import React, { Component } from 'react'

 class VcR2 extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          Result : false
       }
     }
  render() {
      if(this.state.Result){
        return  <div>Hai Html,Css</div>
      }else{
        return <div>Javascript,Reactjs</div>
      }
    return (
      <div>
          <div>Hai Html,Css</div>
          <div>Javascript,Reactjs</div>
      </div>
    )
  }
}

export default VcR2