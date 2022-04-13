import React, { Component } from 'react'
import { Hocomponent } from './HOCcomponent'

export  class Clickcounter1 extends Component {
  render() {
      console.log(this.props);
    //   const{ Incrementcount,Decrementcount,count } = this.props
    return (
        
      <div>
          {/* normal method */}
          
          {/* <button onClick={this.props.Incrementcount}>Increase</button>
          <button onClick={this.props.Decrementcount}>Decress</button>
          <h2>Rating :{this.props.count}</h2> */}

          {/*Destructure method */}
          {/* <button onClick={Incrementcount}>Increase</button>
          <button onClick={Decrementcount}>Decress</button>
          <h2>Rating :{count}</h2> */}
      </div>
    )
  }
}
export default Hocomponent(Clickcounter1)