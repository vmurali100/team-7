import { Component } from "react";

export default class Classcomp extends Component{
    constructor(){
        super()
        this.state={
            Caps:'A,B,C',
            Small:'a,b,c'
        }
    }
    render(){
        return <>
           <h1>Alphabatics</h1>
           <ul>
               <li>Caps : {this.state.Caps}</li>
               <li> Small : {this.state.Small} </li>
           </ul>
        </>
    }
}