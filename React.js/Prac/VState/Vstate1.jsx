import { Component } from "react";

export class Vstate1 extends Component{
    constructor(){
        super()
        this.state = {
            Hai : "Hai React how r u...??"
        }
    }
    changHai(){
        this.setState({
            Hai : "Yeah I am good"
        })
    }
    render(){
        return (
            <div>
                <h3>{this.state.Hai}</h3>
                <button onClick={()=> this.changHai()}>Click</button>
            </div>
        )
    }
}