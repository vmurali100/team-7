import { Component } from "react";

export class Sada extends Component{
    constructor(){
        super()
        this.state = {
            Obj:{
                Fname:"Deena",
                Lastname:"vd",
                Age:21,
                Phone: 12367890,
                Place:"Chittoor",
                State:"A.P"
            }
        }
    }
    render(){
        return(
            <div>
               <h1>Firstname : {this.state.Obj.Fname} </h1>
               <h1>Lastname : {this.state.Obj.Lastname} </h1>
              <h1>Age : {this.state.Obj.Age}  </h1>
              <h1> Phone : {this.state.Obj.Phone} </h1>
               <h1>Place : {this.state.Obj.Place} </h1>
               <h1>State : {this.state.Obj.State} </h1>
            </div>
        )
    }
}