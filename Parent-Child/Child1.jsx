import { Component } from "react";

export default class Child1 extends Component{
    constructor(props){
        super()
    }
    render(){
        return <div>
            <h1>Name:{this.props.Students.Name}</h1>
            <h1>Age:{this.props.Students.Age}</h1>
            <h1>Email:{this.props.Students.Email}</h1>
            <h1>City:{this.props.Students.City}</h1>
        </div>
    }
}