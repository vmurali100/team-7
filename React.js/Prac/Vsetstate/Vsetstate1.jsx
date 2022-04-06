import { Component } from "react";

export class Vsetstate1 extends Component{
    constructor(){
        super()
        this.state = {
            Number : 0
        }
    }

    increase(){
        this.setState({
            Number : this.state.Number + 1
        })
        console.log(this.state.Number)
    }
    dicrease(){
        this.setState({
            Number : this.state.Number - 1
        })
    }
    render(){
        return <div>
            <h3>Number : {this.state.Number}</h3>
            <button onClick={() => this.increase()}>Increase</button>
            <button onClick={() => this.dicrease()}>Dicrease</button>
        </div>
    }
}