import React, { Component } from 'react'

export default class Sam6 extends Component {
  render() {
      const {name , playername} = this.props
    return (
      <div>
          <h1> {name} {playername}</h1>
      </div>
    )
  }
}
