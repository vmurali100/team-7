import React, { Component } from 'react'

export default class extends Component {
    constructor() {
        super()
        this.state = {
            message: "Iam From Surya Component...!"
        }
        this.setState=this.setState.bind(this)
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>

                <button onClick={this.handling}> Reset</button>

                <button onClick={this.handling.bind(this)}> Reset</button>

                <button onClick={this.handling}> Reset</button>

                <button onClick={this.handling=()=>8}> Reset</button>
            </div>
        )
    }
}
