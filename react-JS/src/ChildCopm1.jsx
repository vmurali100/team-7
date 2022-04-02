import { Component } from "react";

export default class Student1 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div style={{color:'brown'}}>
        <h1>Name:-{this.props.A.Name}</h1>
        <h1>City:-{this.props.A.City}</h1>
        <h1>Email:-{this.props.A.Email}</h1>
        <h1>Phone:-{this.props.A.Phone}</h1>
        <h1>Gender:-{this.props.A.Gender}</h1>
        </div>
    }
}