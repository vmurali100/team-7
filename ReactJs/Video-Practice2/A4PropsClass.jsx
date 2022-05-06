import React, { Component } from 'react'

export default class PropsClass extends Component {
  render() {
    return (
      <div>
          <h1>
              my dad is{this.props.Surname} and my name is {this.props.Name}
          </h1>
      </div>
    )
  }
}
