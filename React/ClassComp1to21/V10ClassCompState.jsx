import { Component } from "react";

export class StateMethod extends Component{
    constructor(){
        super()
        this.state = {
             Data : "Hello Team members"
        }
    }
    ChangData(){
        this.setState({
            Data : "Good morning to all...:)"
        })
    }
    render(){
        return (
            <div>
                <h2>{this.state.Data}</h2>
                <button onClick={() => this.ChangData()}>On Click</button>
            </div>            
        )
    }
}