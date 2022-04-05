import React, { Component } from 'react'

export default class ConditionalRendaring extends Component {
    constructor() {
        super()

        this.state = {
            LogedIn: false
        }
    }
    render() {
        if (this.state.LogedIn) {
            return <div>Welcome Rehaman</div>
        } else {
            return <dir>Welcome Friends</dir>
        }
    }
}
