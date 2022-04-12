import React, { Component } from 'react'
import Hai from './Hai'
import Hello from './Hello'

export default class LifeCycleSa extends Component {
  constructor(props) {
    super(props)
  console.log('Component constructor Cycle') 
  }
  componentWillMount(){
    console.log('componentWillMount Cycle')
  }

  // 2.updating 

shouldComponentUpdate(){
  console.log('shouldComponentUpdate')
  return true
}

componentDidCatch(){
  console.log('componentDidCatch')
}

componentDidUpdate(){
  console.log('componentDidUpdate')
}

  componentDidMount(){
    console.log('componentDidMount')
  }
  render() {
    console.log('Component Render Cycle')
    return (
      <div> 
        {this.props.fname == ""? <Hai/>:<Hello fname={this.props.fname}/> }

         </div>
    )
  }
}
