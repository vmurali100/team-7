import React, { Component } from 'react'

 class Vbevnt3 extends Component {
     constructor(props){
         super(props)
         this.state = {
             message : 'This is Arrow Function'
         }
     }
     clickHandler=()=>{
        this.setState({
            message : 'ok done..!!'
        })
        console.log(this)
}
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          <button onClick={()=>this.clickHandler()}>Submit</button>
      </div>
    )
  }
}

export default Vbevnt3