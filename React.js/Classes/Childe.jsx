import { Component } from "react"

export class Eone extends Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div>
                <h1>Carname : {this.props.Osv.Carname}</h1>
                <h1>Sitting : {this.props.Osv.Sitting}</h1>
                <h1>Color : {this.props.Osv.Color}</h1>
                <h1>Model : {this.props.Osv.Model}</h1>
                <h1>Price : {this.props.Osv.Price}</h1>
            </div>
        )
    }
}