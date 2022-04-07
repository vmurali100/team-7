import React, { Component } from 'react'

export default class Roshan extends Component {
    constructor() {
        super()
        this.state = {
            employee: {
                id: '4564',
                city: 'Bangloore',
                pinNo: '10299'
            }
        }
    }

    changesget = () => {
        let newState = { ...this.state }
        newState.employee = {
            id: '43254',
            city: 'Chennai',
            pinNo: 'cmdncnj'
        }
        this.setState(newState)
    }

    render() {
        let { id, city, pinNo } = this.state.employee
        return (
            <div>
                <ul>
                    <li>{id}</li>
                    <li>{city}</li>
                    <li>{pinNo}</li>
                </ul>
                <button onClick={this.changesget}></button>
            </div>
        )
    }
}
