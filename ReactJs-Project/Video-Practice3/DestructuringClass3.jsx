import React, { Component } from 'react'

export default class DestructuringClass3 extends Component {
  render() {
      const{Name,LoverName}=this.props
    return (
      <div>
          <h1>Name is {this.props.Name} my lover name:{this.props.LoverName}</h1>
          </div>
    )
  }
}
