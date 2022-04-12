import React, { Component } from 'react'

export default class Box extends Component {
  render() {
    return <h1>Fine And {this.props.myname}You{this.props.urname}</h1>
  }
}
