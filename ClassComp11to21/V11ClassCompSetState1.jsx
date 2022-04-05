import { Component } from "react";

export class Accoumt extends Component{
    constructor(){
        super()
        this.state = {
            Amount : 1
        }
    }

    increase(){
        this.setState({
            Amount : this.state.Amount + 1
        })
        console.log(this.state.Amount)
    }
    dicrease(){
        this.setState({
            Amount : this.state.Amount - 1
        })
    }
    render(){
        return <div>
            <h3>Amount : {this.state.Amount}</h3>
            <button onClick={() => this.increase()}>Increase</button>
            <button onClick={() => this.dicrease()}>Dicrease</button>
        </div>
    }
}