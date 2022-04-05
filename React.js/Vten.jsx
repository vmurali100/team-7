import { Component } from "react";

export class Smethod extends Component{
    constructor(){
        super()
        this.state = {
             Obj : "Hello Good morning.....!! "
        }
    }
    ChangData(){
        this.setState({
            Obj : "Hello Good evening....@@"
        })
    }
    render(){
        return (
            <div>
                <h2>{this.state.Obj}</h2>
                <button onClick={() => this.ChangData()}>On Click</button>
            </div>            
        )
    }
}