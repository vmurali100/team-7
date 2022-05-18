import React, { Component } from 'react'
import Bhai from './Bhai'
import Raju from './Raju'

export default class LifeCycle extends Component {
    constructor(props) {
        console.log(' compnent Constructor')
      super(props)     
    }

    

    componentWillMount(){
        console.log('component WillMount Cycle')
    }
    // 2.Udating
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate Cycle')
        return true
    }
    componentDidCatch(){
        console.log('componentDidCatch Cycle')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate Cycle')
    }
   
  render() {
    console.log(' component Render Cycle')
    return (
      <div>
          {this .props.myName== "" ? <Bhai/> :< Raju myName={this.props.myName}/>}
      </div>
    )
  }
  componentDidMount(){
    console.log('component DidMount Cycle')
}

  
}
