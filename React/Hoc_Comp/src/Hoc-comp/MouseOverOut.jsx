import React, { Component } from 'react'
import HocComponent from './HocComp'

 class MouseOverOut extends Component {
  render() {
      const{count,increment,decrement}=this.props
    return (
      <div>
          <button onMouseOver={increment}>Increament</button>
          <button onMouseOver={decrement}>decrement</button>
          <h1>{count}</h1>

      </div>
    )
  }
}
export default HocComponent(MouseOverOut)

