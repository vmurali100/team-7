import React, { Component } from 'react'

export default class Rehaman extends Component {
    constructor(){
        super()
        this.state={
            colors:{
                color:"red",
                color1:"green",
                color2:"Yellow",
                color3:"Blue"
            }
        }
        this.setState.this.setState.bind(this)
    }

changehanled(){
    this.setState({
        colors:{
            color:"brown",
            color1:"Sky",
            color2:"White",
            color3:"Black"
        }
    })
}

  render() {
      let{color,color1,color2,color3}=this.state.colors
    return (
      <div>
           <h1>Colors :-</h1>
           <ol>
               <li>{color}</li>
               <li>{color1}</li>
               <li>{color2}</li>
               <li>{color3}</li>
           </ol>
           <button onClick={this.changehanled.bind(this)}></button>
      </div>
    )
  }
}
