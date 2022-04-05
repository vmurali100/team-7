import { Component } from "react";

export class Person extends Component{
    render(){
    return <h2>HAello{this.props.MyName}at {this.props.YourName}</h2>        
    }
}