import { Component } from "react";

export default class String extends Component{
    constructor(){
        super()
        this.state={
            data: "This is ReactJs...@@"
        }
    }
    render(){
        return <h1>{this.state.data}</h1>
    }
}