import React, { Component } from 'react'
import { HOComponent } from './HOComponent'

class HoverCounter extends Component {
 
  render() {
    const {incrementCount,decrementCount,count} = this.props

    return (
      <div>
          <button onMouseOver={incrementCount}>Increment + </button>
          <button onMouseOut={decrementCount}>Decrement - </button>
          <h2>The Count Is : {count}</h2>
      </div>
    )
  }
}

export default HOComponent(HoverCounter)
