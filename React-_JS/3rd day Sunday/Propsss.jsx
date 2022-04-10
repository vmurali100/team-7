import { Component } from "react";
import Childunit from "./Propsss-1";


export default class Parent extends Component{
    constructor(){
        super()
        this.state={
            Friend:{
               Namee:'Sandhaya',
               Age:'23',
               City:'Chittoor'            
            }
        }
    }
    render(){
        return (
            <div>
                <Childunit  Myfrnd={this.state.Friend}/>
            </div>
        )
    }

}