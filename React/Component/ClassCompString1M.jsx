import { Component } from "react";

export default class ClassString extends Component {

    constructor() {
        super()
        this.state = {
            message: "Hii guys How are you all..?"
        }
    }
    render() {
        return <h1>{this.state.message}</h1>
    }
}