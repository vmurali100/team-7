import { Component } from "react";
import { Parent } from "./Parent";

export class Child extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <Parent Details = {this.Cars}/>
    }
    
}