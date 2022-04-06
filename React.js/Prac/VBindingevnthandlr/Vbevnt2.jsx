import React, { Component } from 'react'
 class Vbevnt2 extends Component {
    constructor(props){
        super(props)
        this.state ={
            message : 'This is a Binding Event Handler'
        }
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
          <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    )
  }
}
    export default Vbevnt2