import React, { Component } from 'react'

export default class Chaild1 extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {

        return <div>
            <h2> {this.props.Details.Fname} </h2>
            <h3> {this.props.Details.Address} </h3>
            <h4> {this.props.Details.Number} </h4>
            <h5> {this.props.Details.Job} </h5>
            <h1> {this.props.Details.Role} </h1>

        </div>
    }
}
