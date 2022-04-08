import { Component } from "react";

export default class Sample11 extends Component{
    constructor(){
        super()
        this.state = {
            Money: 0
        }
    }
    ProfitValue(){
        this.setState({
            Money : this.state.Money + 5000
        })
        console.log(this.state.Money)
    }
    LossVlaue(){
        this.setState({
            Money : this.state.Money - 5000
        })
        console.log(this.state.Money)
    }
    render(){
        return(
            <div>
                <h2>Money : {this.state.Money}</h2>
                <button onClick={() => this.ProfitValue()}>Profit</button>
                <button onClick={() => this.LossVlaue()}>Loss</button>
            </div>
        )
    }
}