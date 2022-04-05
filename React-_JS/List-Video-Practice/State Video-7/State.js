import React, { Component } from "react";

export class Remo extends Component{
    constructor(){
        super()
        this.state={
           Employee:{
               name:"Surya",
               Number:"45677352652",
               city:"Chittoor",
               Id:"4345",
           }
        }
    }

    render(){
        return(
            <div>
                <ul>
                    <li>{this.state.Employee.name}</li>
                    <li>{this.state.Employee.Number}</li>
                    <li>{this.state.Employee.city}</li>
                    <li>{this.state.Employee.Id}</li>
                    
                </ul>
            </div>
        )
    }
}