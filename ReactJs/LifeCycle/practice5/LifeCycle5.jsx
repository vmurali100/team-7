import { Component } from "react";
import { A1 } from "./A1";
import A2 from "./A2";

export default class LifeCycle5 extends Component{
    constructor(props){
        console.log(' component constructor Cycle')
        super(props)
    }
    componentWillMount(){
        console.log('component WillMount Cycle')
    }
    componentDidMount(){
        console.log('Component Did Mount Cycle')
    }
    render(){
        console.log('render Cycle ')
        return <div>
            <h1> {this.props.State == ""? <A1/>:<A2 State={this.props.State}/>}</h1>
        </div>

    }
}