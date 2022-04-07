import { Component } from "react";

export default class Eventhandling extends Component{
    Clickhandler(){
        <h1>Hello Everyone</h1>
    }
    render(){
        return <>
           <button onClick={this.Clickhandler}>Click</button>
        </>  
    }
}