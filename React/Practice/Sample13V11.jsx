import { Component } from "react";

export class Sample13 extends Component{
    constructor(){
        super()
        this.state = {
            Price : 4500
        }
    }

    Discount(){
        this.setState({
            Price : this.state.Price - 100
        })
        console.log(this.state.Price)
    }
    render(){
        return <div>
            <h3>Furniture Price : {this.state.Price}</h3>
            <button onClick={() => this.Discount()}>Discount</button>
        </div>
    }
}