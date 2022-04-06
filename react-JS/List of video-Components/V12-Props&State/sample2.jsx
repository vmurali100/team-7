import React, { Component } from 'react'

export default class Sample extends Component {
  render() {
      const {fname,lname}=this.props
    //   const {stat1,state2}=this.state
      return (
        <h1>
            Thala {fname} Deena {lname}
        </h1>
    )
  }
}
