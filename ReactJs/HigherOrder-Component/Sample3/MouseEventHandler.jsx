import React, { Component } from 'react'
import NewHOCcomp from './NewHOCcomp'

class MouseEventHandler extends Component {
  render() {
      const{increment,decrement,AccountBalance}=this.props
    return (
      <div>
          <button onMouseOver={increment}> Increment-+</button> 
          <button onMouseOver={decrement}>Decrement- -</button>
          <h1>{AccountBalance}</h1>
      </div>
    )
  }
}
export default NewHOCcomp(MouseEventHandler)
