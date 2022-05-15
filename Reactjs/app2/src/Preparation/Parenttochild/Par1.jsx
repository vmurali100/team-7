import { Component } from "react";
import {Chi1} from "./Chi1";

export default class Par1 extends Component{
    constructor(){
        super()
        this.state={
            Name:"Baan",
            Age:24
        }
    }
    render(){
       
       return <div>
            <Chi1 person={this.state}/>
       </div>
    }
}