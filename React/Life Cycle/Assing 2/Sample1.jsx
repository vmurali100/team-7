import React, { Component } from 'react'
import Sample2 from './Sample2'
import Sample3 from './Sample3'

export default class Sample1 extends Component {
    constructor(props) {
        console.log("Constructor Componet")
      super(props)
    }
    componentWillUnmount(){
        console.log("Component will Mount Cycle")
    }
    shouldComponentUpdate(){
        console.log("Should Component Update Cycle")
        return true
    }
    componentDidCatch(){
        console.log("ComponentDid Catch Life Cycle")
    }
    componentDidUpdate(){
        console.log("Component Did Upadate Life Cycle")
    }
  render() {
      console.log("Component render Cycle")
    return (
      <div>
          {this.props.Car == "" ? <Sample2/> : <Sample3 Car={this.props.Car}/>}
      </div>
    )
  }
  componentDidMount(){
      console.log("Component did Mount Cycle")
  }
}
