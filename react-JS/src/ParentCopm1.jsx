import { Component } from "react";
import Student1 from "./ChildCopm1";

export class Student extends Component{
    constructor(){
        super()
        this.Person={
            Name:"Raju",
            City:"Chittoor",
            Email:"raju143@gamil.com",
            Phone:"9874561230",
            Gender:"male"
        }
    }
    render(){
        return<Student1 A ={this.Person}/>
    }
}