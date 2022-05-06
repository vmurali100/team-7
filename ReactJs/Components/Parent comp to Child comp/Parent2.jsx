import { Component } from "react";
import Chaild2 from "./Chaild2";

export class Cars extends Component{
    constructor(){
        super()
       this. CarNames={
            Name:"Vitara BRIZA",
            Brand:"Suziki",
            Model:"12354",
            Price:"500000"
        }
    }
    render(){
        return <Chaild2 Details={this.CarNames}/>
    }
}