import { Component } from "react";
import { Bone } from "./Childb";

export class Sadb extends Component{
    constructor(){
        super()
        this.state = {
            obja:{
                Fname:"Rehaman",
                Lastname:"syd",
                Age: 23,
                Phone:2345678901,
                Place:"Chennai",
                State:"A.P"
            }
        }
    }
    render(){
        return  <Bone Data={this.state.obja}/>
    }
}