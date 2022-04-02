import { Component } from "react";
import ChaildComp from "./ChaildComp";

export class Parentcomp extends Component {
    constructor() {
        super()
        this.student = {
            Name: "Jayasankar Raju",
            rnumber: "13",
            Mnumber: "9182844880",
            Email: "Rajubhai123@gmail.com"
        }
    }
    render() {
        return <ChaildComp StudentsDetails={this.student} />
    }
}