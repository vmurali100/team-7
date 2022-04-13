import { Component } from "react";

export default class Click extends Component{
    constructor(){
        super()
        this.state = {
            Amount : 0
        }
    }
    IncreaseAmout = () => {
        this.setState({
            Amount:this.state.Amount + 1
        })
    }
    DecreaseAmout = () => {
        this.setState({
            Amount:this.state.Amount - 1
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.IncreaseAmout}>Increase +</button>
                <button onClick={this.DecreaseAmout}>Decrease -</button>
                <h2>Amount : {this.state.Amount}</h2>
            </div>
        )
    }
}