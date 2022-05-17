import React, { Component } from 'react'


export const Hoc = (Emty) => {

    class Hocclass extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }
        IncrementHolder = () => {
            this.setState({ count: this.state.count + 1 })
        }
        DicrementHolder = () => {
            this.setState({ count: this.state.count - 1 })
        }
        render() {
            return (
                <div>
                    <Emty
                        count={this.state.count}
                        increment={this.IncrementHolder}
                        decrement={this.DicrementHolder}
                    />
                </div>
            )
        }
    }

    return Hocclass

}
export default Hoc;
