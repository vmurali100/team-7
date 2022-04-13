import React, { Component } from 'react'

export default class Hii extends Component {
  render() {
    return (
      <h1>Hii Guys</h1>
    )
  }
  componentWillUnmount(){
      console.log("componentWillUnmount will be UnMounted")
  }
}

