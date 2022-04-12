import { Component } from "react";
import Balaji from "./Balaji";
import Hello from "./Hello";


export default class Sample extends Component{
    constructor(props){
        console.log("component constructor cycle")
        super(props)
    }
    // component mounting phase  
    componentWillMount(){
        console.log("componentWillMount cycle")
    }
    // component updating phase 
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate cycle")
        return true
    }
    componentDidCatch(){
        console.log("componentDidCatch cycle")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate cycle")
    }
    // component unmounting phase 
    render(){
        console.log("component render cycle")
        return <>
          {this.props.myname=="" ? <Hello/> : <Balaji myname={this.props.myname}/>}
                
        </>
        
    }
    componentDidMount(){
        console.log("componentDidMount cycle")
    }
}