import React, { Component } from 'react'

export default class PropsComp extends Component {
  render() {
      const {Ename, EId}=this.props
    return (
      <div><h1> {this.props.Ename} {this.props.EId}</h1></div>
    )
  }
}
