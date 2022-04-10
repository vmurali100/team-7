import { Component } from "react";

export default class Gova extends Component{
    constructor(){
        super()
        this.state={
           Mango:['Sweet','Yellow','Pandu','Big mango']
        }
    }
    render(){
        return <>
           <h1>Fruits :-</h1>
           <ul>
               <li>fruity :-:{this.state.Mango}</li>               
           </ul>
        </>
    }
}