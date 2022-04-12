import React, { Component } from 'react'
import EX1 from './EX1'
import EX2 from './EX2'

export default class LifeCycle3 extends Component {
    constructor(props) {
        console.log('Component Constractor Cycle')
      super(props)        
    }
    componentWillMount(){
        console.log('component WillMount Cycle')
    }

    // 2.Updating
    shouldComponentUpdate(){
        console.log('shouldComponent Update Cycle')
        return  true
    }
    componentDidCatch(){
        console.log('component DidCatch Cycle')
    }
    componentDidUpdate(){
        console.log('component DidUpdate Cycle')
    }

    componentDidMount(){
        console.log('component DidMount Cycle')
    }
  render() {
      console.log('Component Render Cycle')
    return (
      <div>
        {this.props.Sky ==  "" ? <EX1/> : <EX2 Sky={this.props.Sky}/>}
      </div>
    )
  }
}
