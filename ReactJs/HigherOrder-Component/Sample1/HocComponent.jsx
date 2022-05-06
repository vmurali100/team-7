import React, { Component } from 'react'

export const HocComponent = (EmtyCoponent) => {
    class NewOne extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0,
            }
        }
        IncrementHandler = () => {
            this.setState({ count: this.state.count + 1 })
        }
        DecrementHandler = () => {
            this.setState({ count: this.state.count - 1 })
        }
        render() {
            return (
                <EmtyCoponent
                    count={this.state.count}
                    Increment={this.IncrementHandler}
                    Decrement={this.DecrementHandler} />
            )

        }
    }
    return NewOne
}
export default HocComponent;
