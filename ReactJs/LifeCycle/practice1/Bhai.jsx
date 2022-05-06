import React, { Component } from 'react'

export default class Bhai extends Component {
  render() {
    return (
      <div>Hiii</div>
    )
  }
  componentWillUnmount(){
    console.log("Very good evening Removed")
  }
}
