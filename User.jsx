import { Component } from "react";
import Hello from "../hello";
import Sonobhadra from "./sonobhadra";

export default class User extends Component{
    constructor(props){
        console.log("component constructor");
        super(props)
    }
    

    componentWillMount(){
        console.log("component will mount");
    }
    shouldComponentUpdate(){
        console.log("should Component update");
        if(this.props.myName == 'sonobhadra sonowal'){
            return false;
        }else{
            return true;
        }
    }
    // for a change in the should component it should return true
    componentDidCatch(){
        console.log("component did catch cycle");
    }
    componentDidCatch(){
        console.log("component did update cycle");
    }


    // 1. component mounting phase
    // 2. component updating phase
    // 3. component unmounting phase
    render(){
        console.log("component render cycle");
        return(
            <div>
                {this.props.myName =="" ? <Hello/> : <Sonobhadra />}
                {/* <h1>Hello wold</h1>
                <h2>hello {this.props.myName} how are you</h2> */}

            </div>
        )
    }
}