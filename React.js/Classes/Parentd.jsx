import { Component } from "react";
import { Done } from "./Childd";

export class Sadd extends Component{
    constructor(){
        super()
        this.state={
            objd:{
                Bikename:"R15",
                Sitting: 2,
                Color :"White,Red",
                Model : 2021,
                Speed: 220,
                Price: 230000
            }
        }
    }
    render(){
        return  <Done Data={this.state.objd}/> 
    }
}