import { Component } from "react";

export class Vstate5 extends Component{
    constructor(){
        super()
        this.state={
            Data: "This is State Method"
        }
    }
    changData(){
        this.setState({
            Data : "This from React"
        })
    }
    render(){
        return(
            <div>
                <h3>{this.state.Data}</h3>
                <button onClick={()=> this.changData()}>Click</button>
            </div>
        )
    }
}