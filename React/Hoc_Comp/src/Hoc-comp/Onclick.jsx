import React, { Component } from 'react'
import HocComponent from './HocComp'

 class OnclickEvent extends Component {
  render() {
      const{count,increment,decrement}=this.props
    return (
      <div>
          <button onClick={increment}>Increament</button>
          <button onClick={decrement}>decrement</button>
          <h1>{count}</h1>

      </div>
    )
  }
}
export default HocComponent(OnclickEvent)
