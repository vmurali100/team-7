import React, { Component } from 'react'
import Hoc from './Hoc'

class ClickEvent extends Component {
  render() {
      const{increment,decrement,count}=this.props
    return (
      <div>
        <button type='button' onClick={increment}>Increment</button>
        <button type='button' onClick={decrement}>Decrement</button>
        <h1> Count:{count}</h1>
      </div>
    )
  }
}
export default Hoc(ClickEvent)
