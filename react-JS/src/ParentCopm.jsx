import { Component } from "react";
import { ChildCopm } from "./ChildCopm";

export default class ParentUser extends Component{
    constructor(){
        super()
        this.User = {
            
            Name:"Deena",
            City:"Chittoor",
            Email:"deenav0003@gamil.com",
            Phone:"9640526503",
            Gender:"male"
        }
    }
    render(){
        return <ChildCopm Data={this.User}/>
       
    }
}

