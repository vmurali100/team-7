import { Component } from "react";

export class Sadc extends Component{
    constructor(){
        super()
        this.state={
            objp:{
                Name:"Employee",
                Job:"Software",
                Company:"TCS",
                Salary:50000,
                Phone:9090909090,
                Place:"Bangalore"

            }
        }
    }
    render(){
        return(
           <div>
             <h1>Name :{this.state.objp.Name}</h1>
            <h1>Job :{this.state.objp.Job}</h1>
            <h1>Company : {this.state.objp.Company}</h1>
            <h1>Salary :{this.state.objp.Salary}</h1>
            <h1>Phone : {this.state.objp.Phone}</h1>
            <h1>Place :{this.state.objp.Place}</h1>
           </div>
        )
    }
}