import React, { Component } from 'react'

export default class ConditionalRendaring2 extends Component {
    constructor() {
        super()

        this.state = {
            Submit: true
        }
    }
    render() {
        // return this.state.Submit && <div>Hello React JS team members</div>
        return (
            this.state.Submit ? (
                <div>Some Students Passed the Exam</div>
            ) : (
                <div>Some Students Failed the Exam</div>
            )
        )
    }
}
