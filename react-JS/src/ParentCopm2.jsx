import { Component } from "react";
import Employee1 from "./ChildCopm2";

export class Employee extends Component{
    constructor(){
        super()
        this.Person={
            Name:"Rehaman",
            City:"Chittoor",
            Email:"bhai143@gamil.com",
            Phone:"8874561230",
            Gender:"male"
        }
    }
    render(){
        return<Employee1 B ={this.Person}/>
    }
}