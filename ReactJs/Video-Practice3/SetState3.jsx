import React, { Component } from 'react'

export default class SetState3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Money: 0
        }
    }
    CreateElm = () => {
        this.setState(
            {
                Money: this.state.Money+1 
            }, () => { console.log(this.state.Money) }
        )
    }
    render() {
        return (
            <div>
                <h1>{this.state.Money}</h1>
                <button onClick={this.CreateElm}>Setstate</button>
            </div>
        )
    }
}
