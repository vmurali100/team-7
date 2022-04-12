import { Component } from "react";
import Hello from "./Hello";
import Murali from "./Murali";

export default class User extends Component{
    constructor(props){
        console.log("Component Constructor Cycle")
        super(props)
    }
    // 1. Component Mounting Phase 
   
    componentWillMount(){
        console.log("componentWillMount Cycle")
    }
    // 2. Component Updating Phase 
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate cycle")
        return true
        // if(this.props.myName == "Murali Krishna"){
        //     return false
        // }else{
        //     return true
        // }
        
    }
    componentDidCatch(){
        console.log("componentDidCatch Cycle")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate cycle")
    }
    


    // 3. Component Un Mounting Phase 
    render(){
        console.log("Component Render Cylce")
        return <div>
            {this.props.myName == "" ? <Hello/> : <Murali myName={this.props.myName}/>}
            
        </div>
    }

    componentDidMount(){
        console.log("Component Did Mount Cycle")
    }
}