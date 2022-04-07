import React, { Component } from 'react'

export default class SetStatE extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Count: 0
        }
    }
    Increment = () => {
        this.setState(
            {
            Count: this.state.Count + 1
        },()=>{ console.log(this.state.Count)}
        )
    }

    render() {
        return (
            <div>
                <h1> {this.state.Count}</h1>
                <button onClick={this.Increment}>Increment</button>
            </div>
        )
    }
}
