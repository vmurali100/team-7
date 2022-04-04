import { Component } from "react";
import { Sparentchild } from "./Sparentchild";

export class Hari extends Component{
    constructor(){
        super()
        this.state={
            persondetail:{
                fname:"hai",
            lname:"bye"
            }
            

        }

    }
    render(){
        return(
            <div>
               {/* <h1> {this.state.fname}</h1>
               <h1>{this.state.lname}</h1> */}
               <Sparentchild personobj={this.state.persondetail}/>
            </div>
        )
    }
}