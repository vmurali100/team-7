import React, { Component } from 'react'

export default class Hai extends Component {
  render() {
    return (
      <div>How is this...</div>
    )
  }
  componentWillUnmount(){
      console.log('componentWillUnmount how is this is removed')
  }
}
