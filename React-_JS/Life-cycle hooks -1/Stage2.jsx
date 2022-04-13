
import { Component } from "react";

export default class Suceessful extends Component {
    render() {
        return (
            <div>
                <h2>Transactions Sucessfully</h2>
                <h4>Thank U For Consulting</h4>
            </div>
        )

    }

    componentWillUnmount() {
        console.log("This  Type of componentWillUnmount ")
    }
}