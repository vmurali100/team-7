import React, { Component } from 'react'

export default class Sample2 extends Component {
  render() {
    return (
      <div>
          <h2>Car Data</h2>
      </div>
    )
  }
  componentWillUnmount(){
      console.log("Component will Unmount Cycle")
  }
}
