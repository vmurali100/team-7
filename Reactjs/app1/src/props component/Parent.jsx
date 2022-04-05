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
           <h3>Name : {this.state.Name}</h3>
           <h3>Age : {this.state.Age}</h3>
       </div>
    }
}