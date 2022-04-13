import { Component } from "react";
import { ChildNew } from "./Child1";
import Chaild2n from "./Child2";

export  class LifeCycle4 extends Component {
  constructor(props) {
    console.log('Component constructor Cycle')
    super(props)
  }
  componentWillMount() {
    console.log('component WillMount Cycle')
  }
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
  componentDidMount() {
    console.log('component DidMount Cycle')
  }
  render() {
    console.log('Component render Cycle')
    return  <div>
      <h1>{this.props.Car == ""?<ChildNew/> :<Chaild2n  Car={this.props.Car}/>}</h1> 
    </div>            
  }
}