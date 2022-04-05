import { Component } from "react";

export class Balu extends Component{
    constructor(){
        super()
        this.state={

            counting:0
        }
    }
    increase(){
        this.setState({
            counting:this.state.counting + 1
        })
    }

    render(){
        return(
            <div>
                <b>Count :-{this.state.counting}</b>
                <button onClick={() => this.increase()}>Onclick</button>
            </div>
        );
    }
}