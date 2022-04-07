import { Component } from "react";

export class Sameera extends Component {
    constructor() {
        super()
        this.state = {
            objectpack: { }
        }
    }

    handler = () => {
        this.setState({
            objectpack: {
                fname: "guru",
                lname: "prasad",
                email: "guruprasad@gmail.com"
            }
        })
    }

    render() {
        return (
            <div>
                <h1>fourth Case of handling</h1>
                <button onClick={this.handler}></button>
            </div>
        )
    }
}