import { Component } from "react";

export class Raj extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <h1>First Name : {this.props.Data.fname}</h1>
            <h1>Last Name : {this.props.Data.lname}</h1>
            <h1>Email : {this.props.Data.mail}</h1>
            <h1>Age : {this.props.Data.age}</h1>
            <h1>City : {this.props.Data.city}</h1>
            <h1>State : {this.props.Data.state}</h1>
        </div>
    }
}