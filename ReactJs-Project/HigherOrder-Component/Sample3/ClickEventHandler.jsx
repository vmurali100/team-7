import React, { Component } from 'react'
import { NewHOCcomp } from './NewHOCcomp'

class ClickEventHandler extends Component {
  render() {
      const{increment,decrement,AccountBalance}=this.props
    return (
      <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>decrement</button>
          <h1>{AccountBalance}</h1>
      </div>
    )
  }
}
export default NewHOCcomp(ClickEventHandler)
