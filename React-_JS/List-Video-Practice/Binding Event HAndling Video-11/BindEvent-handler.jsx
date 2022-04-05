import React, { Component } from "react";

export class Narrow extends Component {
    constructor() {
        super()
        this.state = {

            stringpack: "",

            arraypack: [],

            objectpack: {}

        }
        this.updataing = this.updataing.bind(this)
    }
    update() {
        this.setState({
            stringpack: "hello good afternoon welcome to Sunline"
        })
    }

    updated() {
        this.setState({
            arraypack: ["a", "b", "c", "d", "e", "f"]
        })
    }

    updataing (){
        this.setState({
            objectpack : {
                fname: "guru",
                lname: "prasad",
                email: "guruprasad@gmail.com"
            }
        })        
    }

    render() {
        return (
            <div>
                <h1>{this.state.stringpack}</h1>
                <button onClick={this.update.bind(this)}>Enter</button>
                <br />

                <h2>{this.state.arraypack}</h2>
                <button onClick={() => this.updated()}>EnterData</button>
                <br />

                <h3>{this.state.objectpack}</h3>
                <button onClick={this.updataing}>Sing in</button>
                <br />

            </div>
        );
    }
}