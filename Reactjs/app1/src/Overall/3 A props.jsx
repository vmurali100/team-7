import { Component } from "react";
import Child from "./3 B props";

export default class Parent extends Component{
    constructor(){
        super()
        this.state={
            Gender:{
               Male:'Sanjay',
               Female:'Sneha',
               Shemale:'Sathya'            
            }
        }
    }
    render(){
        return <>
          <Child person={this.state.Gender}/>
        </>
    }

}