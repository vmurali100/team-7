import React, { Component } from 'react'

export default class Day extends Component {
  render() {
      const {FristName,lastName}=this.props
      return (
        <h1>
            Raju {FristName} Kumar {lastName}
        </h1>
    )
  }
}
