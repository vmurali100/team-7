// import { Children, Component } from "react";

import { Component } from "react"
import { Chil } from "./Child1"


export class ParentAR extends Component {
    constructor() {
        super()
        this.State = {
            Employee: {
                name: "Ramesh",
                job: "Painter",
                salary: "25,000",
                company: "TATA",
                aadhaarnumber: "7534 2186 9153",
                address: "Chennai"
            }
        }
    }
    render() {
        return (<div>
            <Chil Info={this.State.Employee} />
        </div>)

    }
}