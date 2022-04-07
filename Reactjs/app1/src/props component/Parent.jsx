import { Component } from "react";
import {Child} from "./Child";

export default class Parent extends Component{
    constructor(){
        super()
        this.state={
            Name:"Balaji",
            Age:24
        }
    }
    render(){
       
       return <div>
            <Child person={this.state}/>
       </div>
    }
}