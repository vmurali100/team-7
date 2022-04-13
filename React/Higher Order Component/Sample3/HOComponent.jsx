import { Component } from "react"

export const HOComponent = (EmptyC) => {
    class NewComponent extends Component {
        constructor() {
            super()
            this.state = {
                Money: 0
            }
        }
        Increament = () => {
            this.setState({
                Money: this.state.Money + 1
            })
        }
        Decreament = () => {
            this.setState({
                Money: this.props.Money - 1
            })
        }
        render() {
            return <EmptyC
                Money={this.state.Money}
                Increament={this.Increament}
                Decreament={this.Decreament}
            />
        }
    }
    return <NewComponent />
}