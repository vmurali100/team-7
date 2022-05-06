import { Component } from "react";

export default class ChaildComp extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return <div>
            <h1>Student Name:{this.props.StudentsDetails.Name}</h1>
            <h2> Roll Number: {this.props.StudentsDetails.rnumber}</h2>
            <h3> Mobile Number: {this.props.StudentsDetails. Mnumber}</h3>
            <h4>Email: {this.props.StudentsDetails.Email} </h4>
        </div>
    }
}
