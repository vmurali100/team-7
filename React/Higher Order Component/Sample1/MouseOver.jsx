import { Component } from "react";

export default class MouseOver extends Component {
    constructor() {
        super()
        this.state = {
            Amount: 0
        }
    }
    MouseOverButton = () => {
        this.setState({
            Amount: this.state.Amount + 1
        })
    }
    MouseButton = () => {
        this.setState({
            Amount: this.state.Amount - 1
        })
    }
    render() {
        return (
            <div>
                <button onMouseOver={this.MouseOverButton}>Increase + </button>
                <button onMouseOver={this.MouseButton}>Dicrease - </button>
                <h2>Amount : {this.state.Amount}</h2>
            </div>
        )
    }
}