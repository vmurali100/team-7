import React, { Component } from 'react'

export const HocComponent = (EmtyCoponent) => {
    class NewOne extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count:0
            }
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
