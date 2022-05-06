import React, { Component } from 'react'

export default class DestructuringClass extends Component {
  render() {
      const{statename,capital}=this.props
    return (
      <div>state name is:-{statename} is capital(capital)</div>
    )
  }
}
