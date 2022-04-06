import React, { Component } from 'react'

 class Vbevnt4 extends Component {
     constructor(props){
         super(props)
         this.state= {
             message : 'This is a Class Constructor'
         }
         this.clickHandler = this.clickHandler.bind(this)
     }
     clickHandler(){
        this.setState({
            message : 'ok done..!!'
        })
        console.log(this)
}
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          <button onClick={this.clickHandler}>Enter</button>
      </div>
    )
  }
}

export default Vbevnt4