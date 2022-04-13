import React, { Component } from 'react'

class Hover extends Component {
    render() {
        const [Increament,Decreament,Money] = this.props
        return (
            <div>
                <button onClick={Increament}>Increase + </button>
                <button onClick={Decreament}>Dicrease - </button>
                <h2>Money : {Money}</h2>
            </div>
        )
    }
}
export default HOComponent(Hover)
