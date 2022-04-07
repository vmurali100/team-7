import React, { Component } from 'react'

export default class StatE extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Details: 'Iam from Uk - UNited Kingom'
        }
    }
    changeBTN = () => {
        this.setState({
            Details:'I have some committment in India'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.Details}</h1>
                <button onClick={this.changeBTN}> Submit</button>
            </div>
        )
    }
}
