import { Component } from "react";

export class Sample12 extends Component{
    constructor(){
        super()
        this.state = {
            Papulation : 138,
            number : "cr"
            
        }
    }
    IncreasePapulation=()=>{
        this.setState({
            Papulation : this.state.Papulation + 1
        })
        console.log(this.state.Papulation)
    }
    render(){
        return(
            <div>
                <h3>Indian Papulation : {this.state.Papulation} {this.state.number}</h3>
                <button onClick={ this.IncreasePapulation}>Click</button>
            </div>
        )
    }
}