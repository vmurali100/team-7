import { Component } from "react";

export default class MouseOver2 extends Component {
    constructor() {
        super()
        this.state = {
            Price : 5500
        }
    }
    Change = () => {
        this.setState({
            Price: this.state.Price + 50
        })
    }
    ChangeBtn = () => {
        this.setState({
            Price: this.state.Price - 50
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.Change}>Increase + </button>
                <button onClick={this.ChangeBtn}>Discount - </button>
                <h2>Furniture Price : {this.state.Price}</h2>
            </div>
        )
    }
}