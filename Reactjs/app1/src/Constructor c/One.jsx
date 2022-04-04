import { Component } from "react";

export default class One extends Component{
    constructor(){
        super()
        this.state={
            Name:"Balaji",
            Age:24
        }
    }
    render(){
        // return <Child person={this.state}/>
       return <div>
           <h3>Name : {this.state.Name}</h3>
           <h3>Age : {this.state.Age}</h3>
       </div>
    }
}