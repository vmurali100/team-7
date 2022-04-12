import React, { Component } from 'react'

export default class Hello extends Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
  componentWillUnmount(){
      console.log("Hello componetwillUnmount Will be unmounted")
  }
}
