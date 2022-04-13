import { Component } from "react"

export const Hocomponent = (Emptycomponent) => {
    class Newcomponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        handleincrement = () => {
            this.setState({ count: this.state.count + 1 })
        }
        handledecrement = () => {
            this.setState({ count: this.state.count - 1 })
        }
        render() {
            return <Emptycomponent count={this.state.count}
                incrementcount={this.handleincrement} decrementcount={this.handledecrement} />
        }
    }
    return <Newcomponent />


}