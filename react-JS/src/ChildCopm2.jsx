import { Component } from "react";

export default class Employee1 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div style={{color:'green'}}>
        <h1>Name:-{this.props.B.Name}</h1>
        <h1>City:-{this.props.B.City}</h1>
        <h1>Email:-{this.props.B.Email}</h1>
        <h1>Phone:-{this.props.B.Phone}</h1>
        <h1>Gender:-{this.props.B.Gender}</h1>
       
        </div>
    }
}