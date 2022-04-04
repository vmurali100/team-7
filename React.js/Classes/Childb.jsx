import { Component } from "react";

export class Bone extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Firstname : {this.props.Data.Fname} </h1>
                <h1>Lastname : {this.props.Data.Lastname} </h1>
                <h1>Age : {this.props.Data.Age}  </h1>
                <h1> Phone : {this.props.Data.Phone} </h1>
                <h1>Place : {this.props.Data.Place} </h1>
                <h1>State : {this.props.Data.State} </h1>
            </div>
        )
    }
}