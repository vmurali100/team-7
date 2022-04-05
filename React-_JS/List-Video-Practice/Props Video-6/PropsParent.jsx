import React, { Component } from "react";
import { PropsChild } from "./PropsChild";

export class suryasp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            person: {
                fname: "Surya",
                lname: "Prakash",
                age: "23",
                email: "Suryasp@gmail.com",
                EMPId: "2675"
            }
        }
    }
    render() {
        return (
            <div>
                <h1>this props to access the data to Child props</h1>
                <PropsChild  details={this.state.person}/>
            </div>
        )
    }
}