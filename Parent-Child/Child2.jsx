import { Component } from "react";
import {Par2}from "./Par2";

export default class Child2 extends Component{
    constructor(){
        super()
        this.state={
            Name:'Raju',
            City:'Chittoor',
            Email:'raju143@gamil.com',
            Age:'22'
        }
    }
    render(){
        return <div>
            <par2 Persons ={this.state}/>
        </div>
    }
}