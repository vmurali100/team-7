import { Component } from "react";
import ChildComponent from "./ChildComponent";
export default class Parentcomp extends Component{
    constructor(){
        super()
        this.state = {
            fname: "Stallone",
            lname: "seagel",
            email: "seagel@gmail.com",
            person:{
                city: "Bangalore",
                state: "karnataka"
            }
        }
        
    }
    render(){
        // return (
        //     <>
        //     <h2>{this.state.fname}</h2>
        //     <h2>{this.state.lname}</h2>
        //     <h2>{this.state.email}</h2>
        //     <h2>{this.state.person.city}</h2>
        //     <h2>{this.state.person.state}</h2>
        //     </>
        // )
        return(
            <ChildComponent parentperson={this.state.person} />
        )
    }
}