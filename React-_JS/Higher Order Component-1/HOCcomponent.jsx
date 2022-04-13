import React, { Component } from 'react'

export const Hocomponent = (MyRoom) => {
    class HigherOrder extends Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0,
            }
        }

        handleIncrement = () => {
            this.setState({ count: this.state.count+1 })
        }

        handleDecrement = () => {
            this.setState({ count: this.state.count-1 })
        }

        render() {
            return (
                <div>
                    <MyRoom count={this.state.count} Incrementcount={this.handleIncrement} Decrementcount={this.handleDecrement} />
                </div>
            )
        }
    }
    return HigherOrder
}
export default Hocomponent;
