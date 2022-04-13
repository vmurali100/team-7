import React, { Component } from 'react'
import Deena from './Deena'
import Hello from './Hello'

export default class User extends Component {
  constructor(props) {
    console.log("Component Constructor Cycle")
    super(props)
  }
  // 1.Mounting 
  componentWillMount() {
    console.log("ComponentWillMount Cycle")
  }
  // 2.Updating
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate Cycle")
   return false
  }
  componentDidCatch() {
    console.log("componentDidCatch Cycle")
  }
  componentDidUpdate() {
    console.log("componentDidUpdate Cycle")
  }

  // 3.Un Mounting

  render() {
    console.log("Component Render Cycle")
    return <div>
      {this.props.myname == "" ? <Hello /> : <Deena myname={this.props.myname} />}
    </div>
  }
  componentDidMount() {
    console.log("component Did Mount Cycle")
  }

}
