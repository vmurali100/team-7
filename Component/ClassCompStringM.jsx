import { Component } from "react";

export class StringMethod extends Component{
    constructor(){
        super()
        this.state = {
            message:"Welcome to Class Component..."
        }
    }
    render(){
        return <h1>{this.state.message}</h1>
    }
}