import { Component } from "react";

export default class SetState extends Component {
    constructor() {
        super()
        this.state = {
            Count: 0
        }
    }

    increament() {
        this.setState({
           Count : this.state.Count + 1
        })
        console.log(this.state.Count)
    }

    render() {
        return (
            <div>
                <div>Count : {this.state.Count}</div>
                <button onClick={() => this.increament()}>Increament</button>
            </div>
        )
    }
}