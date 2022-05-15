import { Component } from "react";
import {par2} from "./par2";

export default class Chi2 extends Component{
    constructor(){
        super()
        this.state={
            Name:"Baan",
            Age:24
        }
    }
    render(){
       
       return <div>
            <par2 person={this.state}/>
       </div>
    }
}